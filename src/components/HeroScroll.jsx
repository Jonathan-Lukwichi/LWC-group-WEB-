import { hero } from '../data/content'

// Looping cinematic hero: the "rescue" clip plays continuously behind the copy.
// (Simpler and easier to follow than a scroll-scrub; the video carries the story.)
export default function HeroScroll() {
  return (
    <section className="herov" id="top" aria-label="LWC Group — reliability in action">
      <video
        className="herov__video"
        src="/hero.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="herov__veil" />
      <div className="container herov__content">
        <div className="hs-ov__inner">
          <span className="hs-ov__tag">Mining · Reliability</span>
          <h1 className="display herov__title">{hero.title}</h1>
          <p className="hs-ov__p" style={{ marginBottom: 30 }}>{hero.sub}</p>
          <div className="hero__actions">
            <a className="btn" href="#contact">{hero.cta}</a>
            <a
              className="btn btn--ghost"
              href="#how"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}
            >
              See how we work
            </a>
          </div>
        </div>
      </div>
      <div className="herov__cue" aria-hidden="true">Reliability, in motion</div>
    </section>
  )
}
