import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react'
import * as enContent from '../data/content'
import * as frContent from '../data/content.fr'
import { homeHero as homeHeroEN, scrollFrames as scrollFramesEN } from '../data/scrollFrames'
import { homeHero as homeHeroFR, scrollFrames as scrollFramesFR } from '../data/scrollFrames.fr'
import { strings } from './strings'

// Everything a page needs for one language, in one bundle.
const BUNDLES = {
  en: { ...enContent, homeHero: homeHeroEN, scrollFrames: scrollFramesEN, t: strings.en },
  fr: { ...frContent, homeHero: homeHeroFR, scrollFrames: scrollFramesFR, t: strings.fr },
}
const STORAGE_KEY = 'lwc-lang'
const LangCtx = createContext(null)

export function LangProvider({ children }) {
  // Default English; the visitor's saved choice is applied after mount.
  const [lang, setLang] = useState('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'fr') setLang(saved)
    } catch { /* storage blocked — stay on default */ }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* ignore */ }
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'fr' : 'en')), [])
  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, toggle])
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}

export function useLang() {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error('useLang must be used within <LangProvider>')
  return ctx
}

// Active-language content bundle (content + heroes + UI strings under `.t`).
export function useContent() {
  const { lang } = useLang()
  return BUNDLES[lang] || BUNDLES.en
}

// Shortcut to just the UI micro-copy dictionary.
export function useT() {
  return useContent().t
}
