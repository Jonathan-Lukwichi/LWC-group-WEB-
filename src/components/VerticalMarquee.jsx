// Dynamic vertical marquee: 3 portrait columns that auto-scroll at different
// speeds/directions. Each column's images are duplicated for a seamless loop.
export default function VerticalMarquee({ images = [] }) {
  const cols = [[], [], []]
  images.forEach((src, i) => cols[i % 3].push(src))
  return (
    <div className="vmarq" aria-hidden="true">
      {cols.map((col, c) => (
        <div key={c} className={`vmarq__col vmarq__col--${c + 1}`}>
          {[...col, ...col].map((src, i) => (
            <div key={i} className="vmarq__tile" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      ))}
      <div className="vmarq__fade" />
    </div>
  )
}
