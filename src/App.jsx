import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useSmoothScroll, scrollTop } from './lib/smoothScroll'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Story from './pages/Story'
import Details from './pages/Details'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollTop()
  }, [pathname])
  return null
}

function Shell() {
  useSmoothScroll()
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Story />} />
        <Route path="/services" element={<Details />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
