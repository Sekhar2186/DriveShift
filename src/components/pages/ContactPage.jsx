import { Link } from 'react-router-dom';
import './Page.css';

const contactCards = [
  {
    title: 'Call us',
    value: '9885083834',
    note: 'Monday to Saturday, 9:00 AM to 8:00 PM',
  },
  {
    title: 'Email us',
    value: 'support@getcars.com',
    note: 'We usually reply within one business day',
  },
  {
    title: 'Visit us',
    value: 'Auto Nagar',
    note: "Beside Sajju's massage centre",
  },
  {
    title: 'Appointments',
    value: '48 hour slots',
    note: 'Book a test drive around your schedule',
  },
];

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <p className="page-kicker">Contact</p>
        <h1 className="page-title">Talk to DriveSift about your next vehicle.</h1>
        <p className="page-lead">
          Whether you are exploring a car or a bike, we can help you plan the
          next step with less guesswork.
        </p>
        <div className="page-actions">
          <Link className="primary-button" to="/models">
            See models
          </Link>
          <Link className="secondary-button" to="/service">
            Read about service
          </Link>
        </div>
      </section>

      <div className="contact-layout">
        <aside className="contact-aside">
          <div className="contact-card-grid">
            {contactCards.map((card) => (
              <article className="contact-card" key={card.title}>
                <p className="contact-card-title">{card.title}</p>
                <h2>{card.value}</h2>
                <p>{card.note}</p>
              </article>
            ))}
          </div>

          <div className="contact-note">
            <p className="section-kicker">Fast support</p>
            <h2>Need help choosing between a car and a bike?</h2>
            <p>
              We can compare fit, budget, features, and maintenance so the
              decision feels simple.
            </p>
          </div>
        </aside>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="catalog-heading">
            <p className="section-kicker">Send an enquiry</p>
            <h2>We will get back to you with the next steps.</h2>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>Your name</span>
              <input className="form-input" type="text" placeholder="Full name" />
            </label>
            <label className="form-field">
              <span>Phone number</span>
              <input
                className="form-input"
                type="tel"
                placeholder="Mobile number"
              />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>Email address</span>
              <input className="form-input" type="email" placeholder="Email" />
            </label>
            <label className="form-field">
              <span>Interested in</span>
              <select className="form-input" defaultValue="">
                <option value="" disabled>
                  Select a category
                </option>
                <option value="cars">Cars</option>
                <option value="bikes">Bikes</option>
                <option value="both">Both</option>
              </select>
            </label>
          </div>

          <label className="form-field">
            <span>Tell us what you are looking for</span>
            <textarea
              className="form-input form-textarea"
              placeholder="Budget, preferred models, timeline, or anything else we should know"
            />
          </label>

          <button className="primary-button submit-button" type="submit">
            Send enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
