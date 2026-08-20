import { Link } from 'react-router-dom'
import { team } from '../data/content'
import Reveal from '../components/Reveal'

export default function Team() {
  return (
    <>
      <section className="section" style={{ paddingTop: 'clamp(130px,20vh,180px)' }}>
        <div className="container">
          <Reveal className="shead center" style={{ margin: '0 auto' }}>
            <div className="kicker">{team.kicker}</div>
            <h2 className="h2">{team.title}</h2>
            <div className="rule center" />
          </Reveal>
          <div className="grid g3" style={{ marginTop: 52 }}>
            {team.members.map((m, i) => (
              <Reveal key={m.name} className="pcard" delay={i * 90}>
                <div className="pcard__ph"><img src={m.photo} alt={m.name} /></div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.bio}</p>
                <p style={{ marginTop: 14, display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={`https://wa.me/${m.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">{m.phone}</a>
                  <a href={`mailto:${m.email}`}>{m.email}</a>
                </p>
              </Reveal>
            ))}
          </div>
          <p className="center small" style={{ marginTop: 36, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Languages: English · Français · Swahili · Lingala
          </p>
          <div className="center" style={{ marginTop: 40 }}>
            <Link className="btn" to="/contact">Work with us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
