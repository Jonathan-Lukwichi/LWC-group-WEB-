import { Link } from 'react-router-dom'
import ImmersiveBg from '../components/ImmersiveBg'
import { story, heroScroll } from '../data/content'
import { useReveal } from '../lib/useReveal'

// Page 1 — immersive scroll story. The rescue narrative told beat by beat as
// you scroll, over a fixed video/photo background that crossfades with you.
export default function Story() {
  useReveal()
  const beats = heroScroll.scenes
  return (
    <div className="story">
      <ImmersiveBg />
      <div className="story__flow">
        <section className="beat beat--intro" id="top">
          <div className="container">
            <div className="beat__inner reveal">
              <img className="story__emblem" src="/logo-icon.png" alt="LWC Group" />
              <div className="story__brandline">{story.brandLine}</div>
              <h1 className="display beat__title">{story.introTitle}</h1>
              <p className="beat__p">{story.introSub}</p>
            </div>
          </div>
          <div className="beat__cue" aria-hidden="true">{story.cue}</div>
        </section>

        {beats.map((b, i) => (
          <section className={`beat ${i === beats.length - 1 ? 'beat--final' : ''}`} key={i}>
            <div className="container">
              <div className="beat__inner reveal">
                <span className="beat__tag">{b.tag}</span>
                <h2 className="display beat__title">{b.title}</h2>
                <p className="beat__p">{b.p}</p>
                {i === beats.length - 1 && (
                  <Link className="btn" to={story.ctaTo} style={{ marginTop: 26 }}>
                    {story.ctaLabel} →
                  </Link>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
