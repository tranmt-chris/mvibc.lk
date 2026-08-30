import home from "@/src/data/home.json";
import site from "@/src/data/site.json";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const purposes = [
  { symbol: "☸", title: "Supporting the Sangha", text: "Providing accommodation, facilities and practical support for Buddhist monks visiting Anuradhapura." },
  { symbol: "♡", title: "Serving the Community", text: "Extending compassionate and humanitarian assistance to people within the surrounding community." },
  { symbol: "❦", title: "Preserving the Dhamma", text: "Encouraging Buddhist practice, education, fellowship and cultural exchange for future generations." },
];
const events = [
  { number: "01", title: "Centre Anniversary", text: "Commemorating the establishment of the Centre and its continuing service to the Sangha and community." },
  { number: "02", title: "Vassāna Invitation", text: "Supporting the Sangha during the traditional Rains Retreat and this important period of monastic practice." },
  { number: "03", title: "Kathina Ceremony", text: "Bringing together monks and devotees in generosity, gratitude and communal harmony." },
];

export default function Home() {
  return <>
    <Header />
    <main id="top">
      <section className="hero">
        <div className="hero-image" aria-hidden="true" /><div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">{home.eyebrow}</p><h1>{home.heroTitle}</h1>
          <p className="hero-tagline">{site.tagline}</p>
          <div className="hero-actions"><a className="button button-primary" href="#about">Discover Our Centre</a><a className="button button-secondary" href="#visit">Visit Us</a></div>
        </div>
      </section>
      <section id="about" className="intro-section section"><div className="container narrow centered"><p className="section-eyebrow">Welcome</p><h2>{home.aboutTitle}</h2><p className="large-text">{home.aboutText}</p></div></section>
      <section className="purpose-section section"><div className="container">
        <div className="section-heading centered"><p className="section-eyebrow">Our Purpose</p><h2>Compassion in Practice</h2></div>
        <div className="purpose-grid">{purposes.map(item => <article className="purpose-card" key={item.title}><div className="card-symbol" aria-hidden="true">{item.symbol}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div></section>
      <section id="activities" className="events-section section"><div className="container">
        <div className="section-heading"><p className="section-eyebrow">Religious Life</p><h2>Annual Religious Events</h2><p>The Centre conducts important religious and community programmes throughout the year.</p></div>
        <div className="events-grid">{events.map(event => <article className="event-card" key={event.number}><span>{event.number}</span><h3>{event.title}</h3><p>{event.text}</p></article>)}</div>
        <div className="centered section-action"><a className="text-link" href="#visit">Plan your visit →</a></div>
      </div></section>
      <section className="vision-section section"><div className="container narrow centered"><p className="section-eyebrow light">Our Vision</p><blockquote>“{home.vision}”</blockquote></div></section>
      <section id="visit" className="visit-section section"><div className="container visit-grid">
        <div><p className="section-eyebrow">Visit the Centre</p><h2>A Sacred City. A Place of Welcome.</h2><p>Located in historic Anuradhapura, the Centre welcomes monks, pilgrims and devotees from Sri Lanka and around the world.</p><a className="button button-primary" href={`tel:${site.telephone.replace(/\s/g, "")}`}>Contact the Centre</a></div>
        <div className="contact-card"><h3>{site.name}</h3><p>{site.address}</p><a className="telephone" href={`tel:${site.telephone.replace(/\s/g, "")}`}>{site.telephone}</a></div>
      </div>
      <div className="container map-wrap">
        <div className="map-heading"><p className="section-eyebrow">Directions</p><h2>Find Us in Pandulagama</h2></div>
        <iframe className="map-frame" title="Google Map directions to Mangala Vihara International Buddhist Center" src="https://www.google.com/maps?q=Mangala%20Vihara%20Buddhist%20Temple%2C%20Anuradhapura%2C%20Sri%20Lanka&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        <a className="text-link map-link" href="https://maps.app.goo.gl/2AYcsZbY7dm67t1s5" target="_blank" rel="noreferrer">Open directions in Google Maps →</a>
      </div></section>
    </main><Footer />
  </>;
}
