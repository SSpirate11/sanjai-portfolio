// Shared scroll progress (0..1) read inside the 3D render loop without
// triggering React re-renders on every scroll event.
export const scrollState = { progress: 0, raw: 0 };
