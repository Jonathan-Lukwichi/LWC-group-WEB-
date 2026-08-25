import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../i18n/LangContext'
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
const Whats = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.06c-.25.69-1.44 1.32-1.98 1.36-.53.04-1.02.24-3.45-.72-2.9-1.14-4.73-4.14-4.87-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.25-.28.55-.35.73-.35.18 0 .37 0 .53.01.17.01.4-.06.62.48.25.6.85 2.08.92 2.23.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.28-.12.55.16.28.72 1.18 1.54 1.92 1.06.94 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.18 1.35z" /></svg>
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

      {/* CONTACT */}
      <section className="section section--alt" id="team">
        <div className="container">
          <Reveal className="shead center" style={{ margin: '0 auto' }}>
            <div className="kicker">{contact.kicker}</div>
            <h2 className="h2">{contact.title}</h2>
            <div className="rule center" />
            <p className="lead" style={{ margin: '0 auto' }}>{contact.body}</p>
          </Reveal>

          <Reveal id="contact" className="contactbox" delay={80}>
            <div className="contactbox__row">
              {team.members.map((m) => (
                <a key={m.phone} href={`tel:${m.phone.replace(/\s/g, '')}`}><Phone />{m.phone}</a>
              ))}
            </div>
            <div className="contactbox__rule" />
            <div className="contactbox__row">
              <a href={`mailto:${brand.email}`}><Mail />{brand.email}</a>
              {brand.instagram && (
                <a href={brand.instagram} target="_blank" rel="noreferrer"><Insta />{brand.instagramHandle || 'Instagram'}</a>
              )}
            </div>
            <div className="contactbox__row">
              <a className="btn" href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer"><Whats />{t.home.ctaBtn}</a>
            </div>
          </Reveal>

          <p className="center small" style={{ marginTop: 26, letterSpacing: '.1em', textTransform: 'uppercase' }}>
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
