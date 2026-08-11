import { wontClaim as w } from '../data/content'

export default function WontClaim() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="kicker reveal">{w.kicker}</div>
        <h2 className="h2 reveal" style={{ maxWidth: '14ch' }}>{w.title}</h2>
        <ul className="claims">
          {w.items.map((it, i) => (
            <li className="reveal" key={i}>
              <span className="x" aria-hidden="true">&#10005;</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
