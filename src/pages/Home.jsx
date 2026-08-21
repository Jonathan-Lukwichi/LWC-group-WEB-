import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { home, divisions, team, contact, brand } from '../data/content'
import { srcSet } from '../lib/img'
import Reveal from '../components/Reveal'
import ScrubHero from '../components/ScrubHero'
import HeroBand from '../components/HeroBand'
import ScrollHero from '../components/ScrollHero'
import CardMedia from '../components/CardMedia'
import { homeHero } from '../data/scrollFrames'

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

// Credibility facts — answers "are these people real" right under the hero.
const CRED = [
  { b: '4 Divisions', s: 'Engineering · Intelligence · Digital · Academy' },
  { b: '2 Countries', s: 'South Africa · DRC' },
  { b: '4 Languages', s: 'EN · FR · Swahili · Lingala' },
  { b: 'Registered', s: 'SA company · Reg 2026/653840/07' },
]

export default function Home() {
  const h = home
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
        kicker="What we do"
        title={<>Four capabilities. One purpose: <span className="gold-text">create measurable value.</span></>}
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
                    <span className="dcard__go">Explore →</span>
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
            <div className="kicker">How we work</div>
            <h2 className="h2">From problem to <span className="gold-text">proven result.</span></h2>
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

      {/* 7 — HERO BAND: pays for itself */}
      <HeroBand
        video="/v-eng-inspect.mp4"
        poster="/p-eng-inspect.jpg"
        kicker="Why LWC"
        title={<>Engineering that <span className="gold-text">pays for itself.</span></>}
        sub="We find the value hiding in your operation — in recovery, throughput and cost — then we prove it in the numbers."
        cta={{ href: '#team', label: 'Meet the team' }}
      />

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
          <p className="center small" style={{ marginTop: 34, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            {brand.regions} · Languages: English · Français · Swahili · Lingala
          </p>
        </div>
      </section>

      {/* 10 — CLOSING CTA BAND */}
      <HeroBand
        video="/v-owners.mp4"
        poster="/p-owners.jpg"
        kicker="Let's build"
        title={<>Ready to unlock the value <span className="gold-text">in your operation?</span></>}
        sub="Engineering · Intelligence · Digital · Research — one team, measurable results."
        cta={{ href: `https://wa.me/${brand.whatsapp}`, label: 'Message us on WhatsApp' }}
      />
    </>
  )
}
