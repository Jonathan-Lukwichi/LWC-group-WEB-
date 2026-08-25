import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../i18n/LangContext'
import Reveal from '../components/Reveal'
import ScrubHero from '../components/ScrubHero'
import PhoneHero from '../components/PhoneHero'
import Carousel from '../components/Carousel'

function Chain({ items }) {
  return (
    <Reveal className="chain">
      {items.map((s, i) => (
        <Fragment key={s}>
          <div className="node"><b>{i + 1}</b><span>{s}</span></div>
          {i < items.length - 1 && <div className="ar">→</div>}
        </Fragment>
      ))}
    </Reveal>
  )
}

export default function Division({ slug }) {
  const { divisions, scrollFrames, t } = useContent()
  const d = divisions.find((x) => x.slug === slug)
  if (!d) return null
  const sf = scrollFrames[slug]
  const td = t.division
  return (
    <>
      {/* FIRST HERO — immersive scroll-film (canvas + scroll + idle auto-play) */}
      {sf && sf.scrub && <ScrubHero {...sf.scrub} />}

      {/* SECOND HERO — moving video in a device frame (phone or tablet) */}
      {sf && <PhoneHero video={sf.vVideo} poster={sf.vPoster} kicker={td.inMotion} title={sf.vTitle} sub={sf.vSub} variant={sf.vVariant} side={sf.vSide} />}

      <section className="section">
        <div className="container">
          <Reveal className="shead">
            <div className="kicker">{d.name}</div>
            <h2 className="h2">{d.tag}</h2>
            <div className="rule" />
            <p className="lead">{d.intro}</p>
          </Reveal>

          {d.ladder && (
            <div style={{ marginTop: 52 }}>
              <Reveal><div className="kicker">{td.ladder}</div><p className="small" style={{ marginBottom: 22 }}>{td.ladderNote}</p></Reveal>
              <Chain items={d.ladder} />
            </div>
          )}

          {d.pillars && (
            <div className="grid g3" style={{ marginTop: 56 }}>
              {d.pillars.map((p, i) => (
                <Reveal key={p.t} className="pillar" delay={i * 80}>
                  <h3>{p.t}</h3>
                  <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </Reveal>
              ))}
            </div>
          )}

          {d.chain && (
            <div style={{ marginTop: 64 }}>
              <Reveal><div className="kicker">{td.valueChain}</div><h3 className="h3" style={{ marginBottom: 26 }}>{td.valueChainTitle}</h3></Reveal>
              <Chain items={d.chain} />
            </div>
          )}

          {d.tools && (
            <Reveal style={{ marginTop: 52 }}>
              <div className="kicker">{td.tools}</div>
              <div className="tags">{d.tools.map((t) => <span key={t}>{t}</span>)}</div>
            </Reveal>
          )}

          {d.services && (
            <div className="grid g3" style={{ marginTop: 56 }}>
              {d.services.map((s, i) => <Reveal key={s} className="fcard fcard--edge" delay={i * 60}><h3>{s}</h3></Reveal>)}
            </div>
          )}

          {d.offers && (
            <div className="grid g3" style={{ marginTop: 56 }}>
              {d.offers.map((o, i) => <Reveal key={o.t} className="fcard fcard--edge" delay={i * 70}><h3>{o.t}</h3><p>{o.p}</p></Reveal>)}
            </div>
          )}
          {d.promise && (
            <Reveal className="promise" style={{ marginTop: 26 }}>
              <strong style={{ color: 'var(--gold-hi)' }}>{td.promise}</strong>{d.promise}
            </Reveal>
          )}

          {d.deliver && (
            <div style={{ marginTop: 60 }}>
              <Reveal><div className="kicker">{td.deliver}</div></Reveal>
              <div className="grid g3" style={{ marginTop: 16 }}>
                {d.deliver.map((x, i) => <Reveal key={x} className="fcard" delay={i * 50}><h3 style={{ fontSize: 15 }}>{x}</h3></Reveal>)}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section ctaband center">
        <div className="container">
          {sf && sf.carousel && (
            <Reveal style={{ marginBottom: 'clamp(30px,5vh,52px)' }}>
              <Carousel slides={sf.carousel} />
            </Reveal>
          )}
          <Reveal>
            <h2 className="h2">{td.ready(d.name)}</h2>
            <div className="rule center" />
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
              <Link className="btn" to="/#contact">{td.talk}</Link>
              <Link className="btn btn--ghost" to="/">{td.back}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
