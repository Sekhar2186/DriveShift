import { Link } from 'react-router-dom';
import './Page.css';
import { bikeVehicles, carVehicles } from '../../data/vehicles.js';

function VehicleCard({ model, actionLabel = 'View details' }) {
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
          <Link className="vehicle-link" to={`/vehicles/${model.slug}`}>
            {actionLabel}
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
          {carVehicles.map((model) => (
            <VehicleCard key={model.slug} model={model} />
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
          {bikeVehicles.map((model) => (
            <VehicleCard key={model.slug} model={model} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ModelsPage;
