// Build a WebP srcset (480/960/1440) from a base like '/p-server.jpg'.
// The <img src> keeps the original jpg as the ultimate fallback.
export function srcSet(base) {
  if (!base || !base.endsWith('.jpg')) return undefined
  const stem = base.slice(0, -4)
  return `${stem}-480.webp 480w, ${stem}-960.webp 960w, ${stem}-1440.webp 1440w`
}

// A small WebP variant, handy for video posters (lighter than the full jpg).
export function poster(base, w = 960) {
  if (!base || !base.endsWith('.jpg')) return base
  return `${base.slice(0, -4)}-${w}.webp`
}
