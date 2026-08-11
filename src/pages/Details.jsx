import { useReveal } from '../lib/useReveal'
import { detailsHead } from '../data/content'
import Stats from '../components/Stats'
import Problem from '../components/Problem'
import ParallaxBand from '../components/ParallaxBand'
import Capabilities from '../components/Capabilities'
import HowWeWork from '../components/HowWeWork'
import WhereAI from '../components/WhereAI'
import WontClaim from '../components/WontClaim'
import Investment from '../components/Investment'
import Team from '../components/Team'
import Contact from '../components/Contact'

// Page 2 — the details. The light, readable Jackcontrol-style content.
export default function Details() {
  useReveal()
  return (
    <main className="details">
      <header className="details__head">
        <div className="container">
          <div className="kicker reveal">{detailsHead.kicker}</div>
          <h1 className="display reveal" style={{ maxWidth: '18ch' }}>{detailsHead.title}</h1>
          <p className="lead reveal" style={{ marginTop: 18 }}>{detailsHead.sub}</p>
        </div>
      </header>
      <Stats />
      <Problem />
      <ParallaxBand
        img="/mining-before.png"
        kicker="The cost of guessing"
        title="When the machine stops, the whole plant waits."
        align="left"
      />
      <Capabilities />
      <HowWeWork />
      <WhereAI />
      <ParallaxBand
        img="/mining-after.png"
        kicker="The difference"
        title="Prevention you can see — while there is still time to act."
        align="right"
      />
      <WontClaim />
      <Investment />
      <Team />
      <Contact />
    </main>
  )
}
