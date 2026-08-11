import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { brand } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const dark = pathname === '/' // story page → transparent/dark immersive nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${dark ? 'nav--dark' : ''}`}>
      <div className="container nav__inner">
        <Link className="nav__brand" to="/" aria-label="LWC Group home">
          <span className="nav__badge">
            <img src="/logo.png" alt="LWC Group" />
          </span>
          <span className="nav__wordmark">LWC GROUP</span>
        </Link>
        <nav className="nav__links">
          <Link to="/">The Story</Link>
          <Link to="/services">Services &amp; Method</Link>
          <a className="btn nav__cta" href={`mailto:${brand.email}`}>
            Contact us
          </a>
        </nav>
      </div>
    </header>
  )
}
