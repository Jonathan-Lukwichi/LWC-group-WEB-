import { ai } from '../data/content'

export default function WhereAI() {
  return (
    <section className="section section--tight" id="ai">
      <div className="container">
        <div className="kicker reveal">{ai.kicker}</div>
        <h2 className="h2 reveal" style={{ maxWidth: '16ch' }}>{ai.title}</h2>
        <div className="duo">
          <div className="duo__cell duo__use reveal">
            <h3>Where we use it</h3>
            <p>{ai.use}</p>
          </div>
          <div className="duo__cell duo__dont reveal">
            <h3>Where we don&rsquo;t</h3>
            <p>{ai.dont}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
