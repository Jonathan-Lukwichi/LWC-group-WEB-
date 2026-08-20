import { Fragment } from 'react'
import { home, divisions, team, contact, brand } from '../data/content'
import Reveal from '../components/Reveal'
import HeroVideo from '../components/HeroVideo'
import HeroBand from '../components/HeroBand'
import Cinematic from '../components/Cinematic'
import { scenario1, scenario3 } from '../data/scenarios'

const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2z" /></svg>
)
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)

function DivisionSection({ d, i }) {
  const caps = d.deliver || d.services || (d.offers && d.offers.map((o) => o.t)) || []
  const rev = i % 2 === 1
  return (
    <section className={`section ${i % 2 === 1 ? 'section--alt' : ''}`} id={d.slug}>
      <div className={`container split ${rev ? 'rev' : ''}`}>
        <Reveal className="split__img"><img src={d.hero} alt={d.name} /></Reveal>
        <Reveal className="split__txt" delay={80}>
          <div className="kicker">Division {d.no} · {d.name}</div>
          <h2 className="h2">{d.lead}</h2>
          <div className="rule" />
          <p className="lead">{d.intro}</p>
          {d.ladder && (
            <p className="small" style={{ marginTop: 4, color: 'var(--gold-hi)', letterSpacing: '.02em' }}>
              {d.ladder.join('  →  ')}
            </p>
          )}
          <div className="tags" style={{ marginTop: 18 }}>
            {caps.map((c) => <span key={c}>{c}</span>)}
          </div>
          {d.tools && (
            <div className="tags" style={{ marginTop: 10 }}>
              {d.tools.map((t) => <span key={t} style={{ opacity: 0.85 }}>{t}</span>)}
            </div>
          )}
          {d.promise && (
            <div className="promise" style={{ marginTop: 18 }}>
              <strong style={{ color: 'var(--gold-hi)' }}>Our promise: </strong>{d.promise}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  const h = home
  return (
    <>
      {/* VIDEO HERO */}
      <HeroVideo />

      {/* CINEMATIC — Scenario 1: From Ore to Value */}
      <Cinematic {...scenario1} />

      {/* ABOUT + APPROACH */}
      <section className="section" id="about">
        <div className="container">
          <Reveal className="shead">
            <div className="kicker">{h.about.kicker}</div>
            <h2 className="h2">{h.about.title}</h2>
            <div className="rule" />
            <p className="lead">{h.about.body}</p>
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

      {/* IMMERSIVE HERO BAND — value proposition */}
      <HeroBand
        video="/v-eng-inspect.mp4"
        poster="/p-eng-inspect.jpg"
        kicker="Why LWC"
        title={<>Engineering that <span className="gold-text">pays for itself.</span></>}
        sub="We find the value hiding in your operation — in recovery, throughput and cost — then we prove it in the numbers."
        cta={{ href: '#divisions', label: 'See how we do it' }}
      />

      {/* DIVISIONS INTRO */}
      <section className="section section--alt" id="divisions" style={{ paddingBottom: 0 }}>
        <div className="container center">
          <Reveal className="shead center" style={{ margin: '0 auto' }}>
            <div className="kicker">What we do</div>
            <h2 className="h2">Four capabilities. One purpose: <span className="gold-text">create measurable value.</span></h2>
            <div className="rule center" />
          </Reveal>
        </div>
      </section>
      {divisions.map((d, i) => <DivisionSection key={d.slug} d={d} i={i} />)}

      {/* PROVEN VALUE */}
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

      {/* TEAM */}
      <section className="section section--alt" id="team">
        <div className="container">
          <Reveal className="shead center" style={{ margin: '0 auto' }}>
            <div className="kicker">{team.kicker}</div>
            <h2 className="h2">{team.title}</h2>
            <div className="rule center" />
          </Reveal>
          <div className="grid g3" style={{ marginTop: 50 }}>
            {team.members.map((m, i) => (
              <Reveal key={m.name} className="pcard" delay={i * 90}>
                <div className="pcard__ph"><img src={m.photo} alt={m.name} /></div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.bio}</p>
              </Reveal>
            ))}
          </div>
          <p className="center small" style={{ marginTop: 34, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Languages: English · Français · Swahili · Lingala
          </p>
        </div>
      </section>

      {/* CINEMATIC — Scenario 3: One Team, Four Capabilities */}
      <Cinematic {...scenario3} />

      {/* IMMERSIVE HERO BAND — closing call to action */}
      <HeroBand
        video="/v-s1-smelt.mp4"
        poster="/s1-smelt.jpg"
        kicker="Let's build"
        title={<>Ready to unlock the value <span className="gold-text">in your operation?</span></>}
        sub="Engineering · Intelligence · Digital · Research — one team, measurable results."
        cta={{ href: '#contact', label: 'Start a conversation' }}
      />

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <Reveal className="shead">
            <div className="kicker">{contact.kicker}</div>
            <h2 className="h2">{contact.title}</h2>
            <div className="rule" />
            <p className="lead">{contact.body}</p>
          </Reveal>
          <div className="grid g3" style={{ marginTop: 44 }}>
            {team.members.map((m, i) => (
              <Reveal key={m.name} className="ccard" delay={i * 80}>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <a href={`https://wa.me/${m.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><Phone />{m.phone}</a>
                <a href={`mailto:${m.email}`}><Mail />{m.email}</a>
              </Reveal>
            ))}
          </div>
          <p className="small" style={{ marginTop: 28, letterSpacing: '.14em', textTransform: 'uppercase' }}>
            {brand.regions} · {brand.languages} · Website coming soon
          </p>
        </div>
      </section>
    </>
  )
}
