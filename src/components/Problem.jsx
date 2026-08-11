import { problem as p } from '../data/content'
import CountUp from './CountUp'

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="kicker reveal">{p.kicker}</div>
        <div className="problem__grid">
          <div>
            <h2 className="h2 reveal">{p.title}</h2>
            <p className="lead reveal" style={{ marginTop: 24 }}>
              {p.lead}
            </p>
          </div>
          <div className="stat reveal">
            <div className="stat__value">
              <CountUp end={p.stat.value} suffix={p.stat.suffix} />
            </div>
            <p className="stat__label">{p.stat.label}</p>
          </div>
        </div>
        <div className="points">
          {p.points.map((pt, i) => (
            <div className="point reveal" key={i}>
              <h3>{pt.h}</h3>
              <p>{pt.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
