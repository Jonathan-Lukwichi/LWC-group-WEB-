import { how } from '../data/content'

export default function HowWeWork() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="kicker reveal">{how.kicker}</div>
        <h2 className="h2 reveal" style={{ maxWidth: '18ch' }}>{how.title}</h2>
        <p className="lead reveal" style={{ marginTop: 18 }}>{how.sub}</p>
        <div style={{ marginTop: 'clamp(30px, 5vw, 60px)' }}>
          {how.stages.map((s) => (
            <div className="stage reveal" key={s.n}>
              <div className="stage__n">{s.n}</div>
              <div>
                <div className="stage__name">{s.name}</div>
                <div className="stage__meta">{s.meta}</div>
                <p className="stage__p">{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
