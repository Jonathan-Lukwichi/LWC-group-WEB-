import { team as t } from '../data/content'

export default function Team() {
  return (
    <section className="section section--alt" id="team">
      <div className="container">
        <div className="sec-head">
          <div className="kicker reveal">{t.kicker}</div>
          <h2 className="h2 reveal">{t.title}</h2>
          <p className="lead reveal">{t.sub}</p>
        </div>
        <div className="team-grid">
          {t.members.map((m, i) => (
            <div className="team-card reveal" key={i}>
              <div className="team-card__name">{m.name}</div>
              <div className="team-card__role">{m.role}</div>
              <div className="team-card__rows">
                <div className="team-card__row">
                  &#9993;&nbsp; <a href={`mailto:${m.email}`}>{m.email}</a>
                </div>
                {m.phone ? (
                  <div className="team-card__row">&#9742;&nbsp; {m.phone}</div>
                ) : null}
              </div>
              <div className="team-card__langs">
                <span className="chip">{m.langs}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
