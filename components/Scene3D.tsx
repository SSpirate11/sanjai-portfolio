"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sparkles, MeshDistortMaterial, Instances, Instance } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { scrollState } from "@/lib/scroll";

const NODE_COUNT = 46;
const NODE_RADIUS = 2.5;
const PACKET_COUNT = 14;

// Deterministic node positions on a sphere (Fibonacci distribution).
function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push(
      new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius)
    );
  }
  return pts;
}

// Connect each node to its k nearest neighbours → distributed-system topology.
function buildEdges(nodes: THREE.Vector3[], k: number): [number, number][] {
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  for (let i = 0; i < nodes.length; i++) {
    const dists = nodes
      .map((n, j) => ({ j, d: nodes[i].distanceTo(n) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, k);
    for (const { j } of dists) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

function NeuralGraph() {
  const groupRef = useRef<THREE.Group>(null);
  const coreMatRef = useRef<THREE.Material & { color: THREE.Color; distort?: number }>(null);
  const packetsRef = useRef<THREE.Points>(null);

  const nodes = useMemo(() => fibonacciSphere(NODE_COUNT, NODE_RADIUS), []);
  const edges = useMemo(() => buildEdges(nodes, 3), [nodes]);

  // Edge line geometry (one LineSegments for all edges).
  const edgeGeometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions.set([nodes[a].x, nodes[a].y, nodes[a].z], i * 6);
      positions.set([nodes[b].x, nodes[b].y, nodes[b].z], i * 6 + 3);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [edges, nodes]);

  // Data packets travelling along random edges (the "events" flowing through the pipeline).
  const packets = useMemo(
    () =>
      Array.from({ length: PACKET_COUNT }, () => ({
        edge: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        speed: 0.15 + Math.random() * 0.4,
      })),
    [edges.length]
  );

  const packetGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(PACKET_COUNT * 3), 3));
    return geo;
  }, []);

  const violet = useMemo(() => new THREE.Color("#9D4EDD"), []);
  const cyan = useMemo(() => new THREE.Color("#00d9ff"), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);

  useFrame((state, delta) => {
    const scroll = scrollState.progress;
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      // Mouse parallax + slow auto-rotation + scroll-driven spin.
      const targetY = state.pointer.x * 0.4 + t * 0.05 + scroll * Math.PI * 1.5;
      const targetX = -state.pointer.y * 0.3 + scroll * 0.6;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      const breathe = 1 + Math.sin(t * 0.8) * 0.03;
      groupRef.current.scale.setScalar(breathe);
    }

    // Core shifts violet → cyan as you scroll through the site.
    if (coreMatRef.current) {
      tmpColor.copy(violet).lerp(cyan, scroll);
      coreMatRef.current.color.copy(tmpColor);
    }

    // Animate data packets along their edges.
    if (packetsRef.current) {
      const attr = packetsRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < packets.length; i++) {
        const p = packets[i];
        p.t += delta * p.speed;
        if (p.t >= 1) {
          p.t = 0;
          p.edge = Math.floor(Math.random() * edges.length);
        }
        const [a, b] = edges[p.edge];
        const x = nodes[a].x + (nodes[b].x - nodes[a].x) * p.t;
        const y = nodes[a].y + (nodes[b].y - nodes[a].y) * p.t;
        const z = nodes[a].z + (nodes[b].z - nodes[a].z) * p.t;
        attr.setXYZ(i, x, y, z);
      }
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central neural core */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.05, 6]} />
          <MeshDistortMaterial
            ref={coreMatRef as never}
            color="#9D4EDD"
            emissive="#5b2a8c"
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.7}
            distort={0.32}
            speed={1.6}
            wireframe
          />
        </mesh>
      </Float>

      {/* Inner solid glow core */}
      <mesh>
        <icosahedronGeometry args={[0.55, 3]} />
        <meshBasicMaterial color="#9D4EDD" transparent opacity={0.28} />
      </mesh>

      {/* Graph edges */}
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial
          color="#4a7fe0"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Graph nodes (instanced) */}
      <Instances limit={NODE_COUNT} range={NODE_COUNT}>
        <octahedronGeometry args={[0.055, 0]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00b8d4"
          emissiveIntensity={0.9}
          toneMapped={false}
        />
        {nodes.map((pos, i) => (
          <Instance key={i} position={[pos.x, pos.y, pos.z]} />
        ))}
      </Instances>

      {/* Data packets flowing along edges */}
      <points ref={packetsRef} geometry={packetGeometry}>
        <pointsMaterial
          size={0.08}
          color="#cfe8ff"
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </points>

      <Sparkles count={32} scale={6} size={1.4} speed={0.25} color="#C77DFF" opacity={0.2} />
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "fixed", inset: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={22} color="#C77DFF" />
      <pointLight position={[-5, -3, 2]} intensity={16} color="#00d9ff" />

      <Stars radius={50} depth={40} count={1800} factor={3.2} saturation={0} fade speed={0.4} />

      <NeuralGraph />

      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.42} luminanceSmoothing={0.9} mipmapBlur radius={0.6} />
      </EffectComposer>
    </Canvas>
  );
}
