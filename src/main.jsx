import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// StrictMode intentionally omitted: it double-invokes effects in dev, which
// double-initialises GSAP/Lenis. Cleanups exist, but skipping keeps dev clean.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
