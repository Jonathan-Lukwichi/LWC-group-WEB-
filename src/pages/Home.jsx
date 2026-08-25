import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../i18n/LangContext'
import { srcSet } from '../lib/img'
import Reveal from '../components/Reveal'
import ScrubHero from '../components/ScrubHero'
import HeroBand from '../components/HeroBand'
import ScrollHero from '../components/ScrollHero'
import CardMedia from '../components/CardMedia'

// gold-accent title from a { pre, gold, post } record
const gt = (o) => <>{o.pre}<span className="gold-text">{o.gold}</span>{o.post}</>

// Animated background clip + poster for each division card.
const CARD_MEDIA = {
  engineering: { video: '/v-cap-engineering.mp4', poster: '/cap-engineering-480.webp' },
  intelligence: { video: '/v-cap-intelligence.mp4', poster: '/cap-intelligence-480.webp' },
  digital: { video: '/v-digital-energy.mp4', poster: '/p-digital-energy.jpg' },
  academy: { video: '/v-cap-academy.mp4', poster: '/cap-academy-480.webp' },
}

const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2z" /></svg>
)
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)
const Insta = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg>
)

export default function Home() {
  const { home, divisions, team, contact, brand, homeHero, t } = useContent()
  const h = home
  const CRED = t.home.cred
  return (
    <>
      {/* 1 — IMMERSIVE SCROLL-FILM HERO */}
      <ScrubHero id="top" {...homeHero} />

      {/* 2 — CREDIBILITY STRIP */}
      <section className="credstrip" aria-label="LWC Group at a glance">
        <div className="container">
          <div className="credstrip__grid">
            {CRED.map((c) => (
              <div className="cred" key={c.b}><b>{c.b}</b><span>{c.s}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — FOUR DIVISIONS: horizontal scroll-hero opener (desktop scrubs, touch = static) */}
      <ScrollHero
        id="divisions"
        frames={{ dir: '/f-home-h', count: 40 }}
        heightVh={200}
        heading="h2"
        kicker={t.home.whatWeDo}
        title={gt(t.home.divisionsTitle)}
      />
      <section className="section">
        <div className="container">
          <Reveal className="shead center" style={{ margin: '0 auto', textAlign: 'center' }}>
            <p className="lead" style={{ margin: '0 auto' }}>{h.about.body}</p>
          </Reveal>
          <div className="grid g4" style={{ marginTop: 'clamp(36px,6vh,60px)' }}>
            {divisions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <Link to={`/${d.slug}`} className="dcard">
                  <CardMedia video={CARD_MEDIA[d.slug].video} poster={CARD_MEDIA[d.slug].poster} />
                  <div className="dcard__scrim" />
                  <div className="dcard__body">
                    <div className="dcard__no">{d.no}</div>
                    <div className="dcard__tag">{d.tag}</div>
                    <h3 className="dcard__t">{d.name}</h3>
                    <p className="dcard__p">{d.lead}</p>
                    <span className="dcard__go">{t.home.explore}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — HOW WE WORK */}
      <section className="section section--alt" id="approach">
        <div className="container">
          <Reveal className="shead center" style={{ margin: '0 auto' }}>
            <div className="kicker">{t.home.howWeWork}</div>
            <h2 className="h2">{gt(t.home.howTitle)}</h2>
            <div className="rule center" />
          </Reveal>
          <Reveal className="chain" style={{ marginTop: 'clamp(40px,6vh,64px)' }}>
            {h.approach.map((s, i) => (
              <Fragment key={s.n}>
                <div className="node"><b>{s.n}</b><span>{s.name}</span></div>
                {i < h.approach.length - 1 && <div className="ar">→</div>}
              </Fragment>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 6 — PROVEN VALUE */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__txt">
            <div className="kicker">{h.proof.kicker}</div>
            <h2 className="h2">{h.proof.title}</h2>
            <div className="rule" />
            <p className="lead">{h.proof.body}</p>
          </Reveal>
          <Reveal className="kpi" delay={100}>
            <div className="big gold-text">{h.proof.kpi}</div>
            <div className="l">{h.proof.kpiLabel}</div>
            <div className="d">{h.proof.kpiNote}</div>
          </Reveal>
        </div>
      </section>

      {/* 8 + 9 — TEAM & CONTACT (merged) */}
      <section className="section section--alt" id="team">
        <div className="container">
          <Reveal className="shead center" style={{ margin: '0 auto' }}>
            <div className="kicker">{team.kicker}</div>
            <h2 className="h2">{team.title}</h2>
            <div className="rule center" />
            <p className="lead" style={{ margin: '0 auto' }}>{contact.body}</p>
          </Reveal>
          <div id="contact" className="grid g3" style={{ marginTop: 46 }}>
            {team.members.map((m, i) => (
              <Reveal key={m.name} className="pcard pcard--full" delay={i * 90}>
                <div className="pcard__ph"><img src={m.photo} srcSet={srcSet(m.photo)} sizes="(min-width:900px) 33vw, 100vw" alt={m.name} loading="lazy" decoding="async" /></div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.bio}</p>
                <div className="pcard__contact">
                  <a href={`https://wa.me/${m.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><Phone />{m.phone}</a>
                  <a href={`mailto:${m.email}`}><Mail />{m.email}</a>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="orgcontact">
            <a href={`mailto:${brand.email}`}><Mail />{brand.email}</a>
            {brand.instagram && (
              <a href={brand.instagram} target="_blank" rel="noreferrer"><Insta />{brand.instagramHandle || 'Instagram'}</a>
            )}
          </div>
          <p className="center small" style={{ marginTop: 22, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            {t.home.languagesLine}
          </p>
        </div>
      </section>

      {/* 10 — CLOSING CTA BAND */}
      <HeroBand
        video="/v-owners.mp4"
        poster="/p-owners.jpg"
        kicker={t.home.ctaKicker}
        title={gt(t.home.ctaTitle)}
        sub={t.home.ctaSub}
        cta={{ href: `https://wa.me/${brand.whatsapp}`, label: t.home.ctaBtn }}
      />
    </>
  )
}
