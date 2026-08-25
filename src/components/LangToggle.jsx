import { useLang } from '../i18n/LangContext'

// EN | FR segmented switch. 44px tap targets; works in the desktop nav and
// inside the mobile disclosure menu.
export default function LangToggle({ className = '' }) {
  const { lang, setLang, toggle } = useLang()
  return (
    <div className={`langtoggle ${className}`} role="group" aria-label="Language">
      <button
        type="button"
        className={`langtoggle__opt ${lang === 'en' ? 'on' : ''}`}
        aria-pressed={lang === 'en'}
        onClick={(e) => { e.stopPropagation(); setLang('en') }}
      >EN</button>
      <span className="langtoggle__sep" aria-hidden="true">/</span>
      <button
        type="button"
        className={`langtoggle__opt ${lang === 'fr' ? 'on' : ''}`}
        aria-pressed={lang === 'fr'}
        onClick={(e) => { e.stopPropagation(); setLang('fr') }}
      >FR</button>
    </div>
  )
}
