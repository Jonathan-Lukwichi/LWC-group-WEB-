import { useEffect } from 'react'

// Fade-up any .reveal element on the current page when it scrolls into view.
// Called per-page so it re-observes after route changes remount the content.
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    // observe after the current paint so freshly-mounted nodes are caught
    const id = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => io.observe(el))
    })
    return () => {
      cancelAnimationFrame(id)
      io.disconnect()
    }
  }, [])
}
