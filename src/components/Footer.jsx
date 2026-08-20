import { Link } from 'react-router-dom'
import { brand, nav } from '../data/content'

const SERVICES = ['engineering', 'intelligence', 'digital', 'academy']
const toPath = (href) => {
  const key = href.replace('#', '')
  return SERVICES.includes(key) ? `/${key}` : `/${href}`
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo.png" alt="LWC Group" />
            <div className="footer__slogan">King of Engineering Solutions</div>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <h4>Divisions</h4>
              {nav.slice(0, 4).map((n) => <Link key={n.href} to={toPath(n.href)}>{n.label}</Link>)}
            </div>
            <div className="footer__col">
              <h4>Company</h4>
              <Link to="/#team">Team</Link>
              <Link to="/#contact">Contact</Link>
            </div>
            <div className="footer__col">
              <h4>Reach us</h4>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 LWC Group (Pty) Ltd · Reg. 2026/653840/07</span>
          <span>{brand.regions} · {brand.languages}</span>
        </div>
      </div>
    </footer>
  )
}
