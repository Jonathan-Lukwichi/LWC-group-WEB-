import { Link } from 'react-router-dom'
import { useContent } from '../i18n/LangContext'

const SERVICES = ['engineering', 'intelligence', 'digital', 'academy']
const toPath = (href) => {
  const key = href.replace('#', '')
  return SERVICES.includes(key) ? `/${key}` : `/${href}`
}

export default function Footer() {
  const { brand, nav, t } = useContent()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo-icon.png" alt="LWC Group" />
            <div className="footer__slogan">King of Engineering Solutions</div>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <h4>{t.footer.divisions}</h4>
              {nav.slice(0, 4).map((n) => <Link key={n.href} to={toPath(n.href)}>{n.label}</Link>)}
            </div>
            <div className="footer__col">
              <h4>{t.footer.company}</h4>
              <Link to="/#contact">{t.footer.contact}</Link>
            </div>
            <div className="footer__col">
              <h4>{t.footer.reach}</h4>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">{t.footer.whatsapp}</a>
              {brand.instagram && (
                <a href={brand.instagram} target="_blank" rel="noreferrer">
                  {t.footer.instagram}{brand.instagramHandle ? ` ${brand.instagramHandle}` : ''}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{t.footer.rights}</span>
          <span>{brand.regions} · {brand.languages}</span>
        </div>
      </div>
    </footer>
  )
}
