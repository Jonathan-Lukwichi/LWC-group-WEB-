import { heroStats } from '../data/content'

export default function Stats() {
  return (
    <section className="stats-band">
      <div className="container stats-band__grid">
        {heroStats.map((s, i) => (
          <div className="stats-band__item reveal" key={i}>
            <div className="stats-band__top">{s.top}</div>
            <div className="stats-band__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
