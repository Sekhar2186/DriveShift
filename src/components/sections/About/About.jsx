import { Link } from 'react-router-dom';
import './About.css';
import Image1 from '../../../assets/rr.jpeg';

const stats = [
  { value: '15+', label: 'Years of trusted service' },
  { value: '3K+', label: 'Drivers matched with the right car' },
  { value: '24/7', label: 'Customer support' },
  { value: '48h', label: 'Fast test-drive scheduling' },
];

const services = [
  {
    title: 'Curated inventory',
    description:
      'We hand-pick luxury, performance, and daily-drive options so every car feels worth your time.',
  },
  {
    title: 'Flexible financing',
    description:
      'Our team helps you compare plans, trade-in options, and ownership paths without the pressure.',
  },
  {
    title: 'Delivery support',
    description:
      'From paperwork to handover, we keep the process smooth and transparent until the keys are yours.',
  },
];

const values = [
  {
    title: 'Trust first',
    description:
      'We lead with clear details, honest recommendations, and a buying experience that stays easy to follow.',
  },
  {
    title: 'Built for drivers',
    description:
      'Every recommendation is chosen around how you drive, where you go, and what you expect from a car.',
  },
  {
    title: 'Long-term care',
    description:
      'Our relationship does not end at delivery. We stay available for maintenance guidance and future upgrades.',
  },
];

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-hero">
          <div className="about-copy">
            <p className="about-kicker">About DriveSift</p>
            <h2 className="about-title">
              A car company built around trust, taste, and the joy of driving.
            </h2>
            <p className="about-description">
              DriveSift brings together premium vehicles, personal guidance, and
              a smooth buying experience. We help customers discover cars that
              feel like the right fit, not just the next option.
            </p>
            <div className="about-actions">
              <Link className="about-button about-button-primary" to="/models">
                Explore models
              </Link>
              <Link className="about-button about-button-secondary" to="/contact">
                Speak to an advisor
              </Link>
            </div>
            <ul className="about-highlights">
              <li>Tailored recommendations for every lifestyle</li>
              <li>Transparent pricing and vehicle presentation</li>
              <li>Support that continues after the handover</li>
            </ul>
          </div>

          <div className="about-visual">
            <img
              className="about-image"
              src={Image1}
              alt="Premium Rolls Royce vehicle featured by DriveSift"
            />
            <div className="about-note">
              <p className="about-note-label">Our promise</p>
              <p className="about-note-text">
                Every vehicle is presented with the same care we would want for
                our own garage.
              </p>
            </div>
          </div>
        </div>

        <div className="about-stats" aria-label="DriveSift highlights">
          {stats.map((stat) => (
            <article className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <section className="about-services">
          <p className="about-kicker">Services</p>
          <h3 className="about-subtitle">
            Everything you need before and after the drive.
          </h3>
          <div className="about-services-grid">
            {services.map((service) => (
              <article className="about-service-card" key={service.title}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="about-values">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
