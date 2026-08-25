import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../i18n/LangContext'
import LangToggle from './LangToggle'

const SERVICES = ['engineering', 'intelligence', 'digital', 'academy']
// '#engineering' -> '/engineering' (own page); '#team' -> '/#team' (home section)
const toPath = (href) => {
  const key = href.replace('#', '')
  return SERVICES.includes(key) ? `/${key}` : `/${href}`
}

export default function Nav() {
  const { nav, brand, t } = useContent()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link className="nav__brand" to="/" onClick={() => setOpen(false)} aria-label="LWC Group home">
          <span className="nav__badge"><img src="/logo.png" alt="LWC Group" /></span>
          <span className="nav__wordmark">LWC GROUP</span>
        </Link>

        <div className="nav__mobtools">
          <LangToggle className="langtoggle--mob" />
          <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        <nav className={`nav__links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {nav.map((n) => <Link key={n.href} to={toPath(n.href)}>{n.label}</Link>)}
          <LangToggle className="langtoggle--desk" />
          <a className="btn nav__cta" href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">{t.nav.whatsapp}</a>
        </nav>
      </div>
    </header>
  )
}
