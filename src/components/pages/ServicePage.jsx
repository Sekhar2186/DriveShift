import { Link } from 'react-router-dom';
import './Page.css';

const services = [
  {
    title: 'Personal consultation',
    description:
      'Tell us your budget, daily route, and style preferences and we will shortlist the best matches.',
  },
  {
    title: 'Test-drive planning',
    description:
      'We coordinate time slots and vehicle prep so your visit feels calm and well organized.',
  },
  {
    title: 'Finance and trade-in help',
    description:
      'Our team helps compare ownership options and makes trade-in conversations straightforward.',
  },
  {
    title: 'Delivery support',
    description:
      'From paperwork to handover, we keep the final steps clear and easy to follow.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Browse cars and bikes, then tell us what excites you most about driving or riding.',
  },
  {
    step: '02',
    title: 'Compare',
    description:
      'We line up the right options, explain the trade-offs, and answer the practical questions.',
  },
  {
    step: '03',
    title: 'Drive home',
    description:
      'Once you are ready, we help with the final steps and hand the keys over smoothly.',
  },
];

function ServicePage() {
  return (
    <div className="service-page">
      <section className="page-hero">
        <p className="page-kicker">Service</p>
        <h1 className="page-title">Support that makes the buying process easy.</h1>
        <p className="page-lead">
          DriveSift is built to make every stage clearer, from the first
          shortlist to the final handover.
        </p>
        <div className="page-actions">
          <Link className="primary-button" to="/contact">
            Speak with our team
          </Link>
          <Link className="secondary-button" to="/models">
            Browse models
          </Link>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-heading">
          <p className="section-kicker">What we offer</p>
          <h2>Everything you need before and after the drive.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-heading">
          <p className="section-kicker">Process</p>
          <h2>How we move from interest to delivery.</h2>
        </div>
        <div className="service-steps">
          {processSteps.map((step) => (
            <article className="service-step" key={step.step}>
              <span className="service-step-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-cta">
        <div>
          <p className="section-kicker">Ready when you are</p>
          <h2>Let us help you choose the right car or bike.</h2>
          <p>
            We can walk you through model comparisons, test drives, financing,
            and delivery planning in one clean conversation.
          </p>
        </div>
        <Link className="primary-button" to="/contact">
          Contact DriveSift
        </Link>
      </section>
    </div>
  );
}

export default ServicePage;
