import { contact, brand } from '../data/content'

export default function Contact() {
  const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(
    'Plant review — LWC Group'
  )}`
  return (
    <section className="section" id="contact">
      <div className="container cta">
        <div className="kicker reveal">{contact.kicker}</div>
        <h2 className="h2 reveal">{contact.title}</h2>
        <a className="btn reveal" href={mailto} style={{ marginTop: 8 }}>
          {contact.cta}
        </a>
      </div>
    </section>
  )
}
