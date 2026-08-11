import { brand, nav } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo.png" alt="LWC Group" />
            <div>
              <div className="footer__name">LWC GROUP</div>
              <div className="footer__tag">{brand.tagline}</div>
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            {nav.map((n) => (
              <a key={n.href} href={n.href} style={{ display: 'block' }}>
                {n.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <p>{brand.domain}</p>
            <p>Jonathan &amp; Christian Lukwichi</p>
          </div>

          <div className="footer__col">
            <h4>Reach</h4>
            <p>{brand.regions}</p>
            <p>English &middot; Fran&ccedil;ais</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} LWC Group. All rights reserved.</span>
          <span>Advisory &amp; offline &mdash; we never write to your control systems.</span>
        </div>
      </div>
    </footer>
  )
}
