import { contact, team, brand } from '../data/content'
import Reveal from '../components/Reveal'

const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2z" />
  </svg>
)
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
)

export default function Contact() {
  return (
    <>
      <section className="section" style={{ paddingTop: 'clamp(130px,20vh,180px)' }}>
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
