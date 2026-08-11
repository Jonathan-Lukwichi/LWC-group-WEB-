import { capabilities as c } from '../data/content'

export default function Capabilities() {
  return (
    <section className="section section--alt" id="capabilities">
      <div className="container">
        <div className="sec-head">
          <div className="kicker reveal">{c.kicker}</div>
          <h2 className="h2 reveal">{c.title}</h2>
          <p className="lead reveal">{c.sub}</p>
        </div>
        <div className="cap-grid">
          {c.items.map((it, i) => (
            <div className="cap reveal" key={i}>
              <span className="cap__tag">{it.tag}</span>
              <div className="cap__title">{it.title}</div>
              <p className="cap__p">{it.p}</p>
              <div className="cap__specs">
                {it.specs.map((s, j) => (
                  <div className="cap__spec" key={j}>
                    <span>{s[0]}</span>
                    <span>{s[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
