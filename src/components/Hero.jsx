import { hero, heroStats } from '../data/content'

// Photo hero (mining-after image set via CSS background) with overlay copy and
// an honest trust-stat strip, Jackcontrol-style.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__kicker reveal">{hero.kicker}</div>
        <h1 className="display hero__title reveal">{hero.title}</h1>
        <p className="lead hero__sub reveal">{hero.sub}</p>
        <div className="hero__actions reveal">
          <a className="btn" href={hero.ctaHref}>{hero.cta}</a>
          <a
            className="btn btn--ghost"
            href="#how"
            style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}
          >
            See how we work
          </a>
        </div>
        <div className="hero-stats reveal">
          {heroStats.map((s, i) => (
            <div className="hero-stat" key={i}>
              <div className="hero-stat__top">{s.top}</div>
              <div className="hero-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
