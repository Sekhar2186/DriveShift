import { Link } from 'react-router-dom';
import './Page.css';
import bikeImage from '../../assets/bike.jpg';
import extraImage from '../../assets/extra.jpg';
import newImage from '../../assets/new.jpg';
import peakImage from '../../assets/peakpx.jpg';
import rrImage from '../../assets/rr.jpeg';

const carModels = [
  {
    badge: 'Luxury',
    image: rrImage,
    name: 'Rolls-Royce Ghost',
    spec: 'V12 serenity',
    description:
      'A flagship sedan with quiet power, handcrafted comfort, and a road presence that feels effortless.',
    note: 'Best for city arrivals and executive travel.',
  },
  {
    badge: 'Electric',
    image: newImage,
    name: 'Audi RS e-tron GT',
    spec: 'Dual-motor instant torque',
    description:
      'A sleek EV grand tourer tuned for quick launches, modern tech, and a composed long-distance ride.',
    note: 'Perfect for drivers who want speed and efficiency.',
  },
  {
    badge: 'Supercar',
    image: peakImage,
    name: 'Lamborghini Huracán',
    spec: 'V10 excitement',
    description:
      'Sharp styling, a loud personality, and track-ready response for people who want every drive to feel like an event.',
    note: 'Built for weekend runs and special occasions.',
  },
  {
    badge: 'Muscle',
    image: extraImage,
    name: 'Ford Mustang Dark Horse',
    spec: 'V8 performance coupe',
    description:
      'Classic American muscle with modern control, strong acceleration, and a bold stance on the road.',
    note: 'For drivers who want attitude and sound.',
  },
];

const bikeModels = [
  {
    badge: 'Superbike',
    image: bikeImage,
    name: 'BMW S 1000 RR',
    spec: '999cc precision',
    description:
      'A sharp superbike built for riders who want fast response, advanced electronics, and a track-inspired feel.',
    note: 'Ideal for sport riders and open-road runs.',
  },
  {
    badge: 'Track',
    image: bikeImage,
    name: 'Ducati Panigale V4',
    spec: 'Race-derived speed',
    description:
      'Italian design and serious performance with a stance that makes the whole bike feel alive from the first twist.',
    note: 'A premium choice for track-day energy.',
  },
  {
    badge: 'Adventure',
    image: bikeImage,
    name: 'Royal Enfield Himalayan 450',
    spec: 'Long-distance comfort',
    description:
      'Comfortable, durable, and ready for long routes, mixed roads, and weekend exploration beyond the city.',
    note: 'Best for touring and daily utility.',
  },
  {
    badge: 'Sport',
    image: bikeImage,
    name: 'Kawasaki Ninja ZX-6R',
    spec: 'Middleweight performance',
    description:
      'A balanced sport bike with quick handling and a playful personality for riders who want all-round excitement.',
    note: 'Great for riders stepping into performance.',
  },
];

function VehicleCard({ model }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-media">
        <img className="vehicle-image" src={model.image} alt={model.name} />
        <span className="vehicle-badge">{model.badge}</span>
      </div>
      <div className="vehicle-body">
        <h3 className="vehicle-title">{model.name}</h3>
        <p className="vehicle-spec">{model.spec}</p>
        <p className="vehicle-description">{model.description}</p>
        <div className="vehicle-footer">
          <span className="vehicle-meta">{model.note}</span>
          <Link className="vehicle-link" to="/contact">
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}

function ModelsPage() {
  return (
    <div className="models-page">
      <section className="page-hero">
        <p className="page-kicker">Models</p>
        <h1 className="page-title">A curated lineup of cars and bikes.</h1>
        <p className="page-lead">
          From luxury sedans to superbikes, every model is chosen to feel
          exciting, reliable, and ready for the road.
        </p>
        <div className="page-actions">
          <Link className="primary-button" to="/contact">
            Book a test drive
          </Link>
          <Link className="secondary-button" to="/service">
            Explore services
          </Link>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-heading">
          <p className="section-kicker">Cars</p>
          <h2>Luxury and performance cars</h2>
          <p>
            A selection that balances comfort, speed, style, and the kind of
            presence people remember.
          </p>
        </div>
        <div className="vehicle-grid">
          {carModels.map((model) => (
            <VehicleCard key={model.name} model={model} />
          ))}
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-heading">
          <p className="section-kicker">Bikes</p>
          <h2>Performance bikes</h2>
          <p>
            Two-wheeled picks for riders who want sharp handling, road energy,
            and a bike that looks as good as it feels.
          </p>
        </div>
        <div className="vehicle-grid">
          {bikeModels.map((model) => (
            <VehicleCard key={model.name} model={model} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ModelsPage;
