import { Link, Navigate, useParams } from 'react-router-dom';
import '../Page.css';
import './VehicleDetailPage.css';
import { getVehicleBySlug } from '../../../data/vehicles.js';

function VehicleDetailPage() {
  const { slug } = useParams();
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return <Navigate to="/models" replace />;
  }

  return (
    <div className="vehicle-detail-page">
      <section className="page-hero vehicle-detail-hero">
        <div className="vehicle-detail-copy">
          <p className="page-kicker">{vehicle.category}</p>
          <h1 className="page-title">{vehicle.name}</h1>
          <p className="page-lead">{vehicle.detailLead}</p>
          <div className="page-actions">
            <Link className="primary-button" to="/contact">
              Book a test drive
            </Link>
            <Link className="secondary-button" to="/models">
              Back to models
            </Link>
          </div>

          <div className="vehicle-detail-stats">
            {vehicle.specs.map((spec) => (
              <article className="vehicle-detail-stat" key={spec.label}>
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="vehicle-detail-media">
          <img
            className="vehicle-detail-image"
            src={vehicle.image}
            alt={vehicle.name}
          />
          <span className="vehicle-detail-badge">{vehicle.badge}</span>
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-heading">
          <p className="section-kicker">Why it stands out</p>
          <h2>{vehicle.spec}</h2>
          <p>{vehicle.description}</p>
        </div>

        <div className="vehicle-detail-grid">
          <article className="vehicle-detail-panel">
            <h3>Highlights</h3>
            <ul className="vehicle-detail-list">
              {vehicle.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className="vehicle-detail-panel">
            <h3>Quick summary</h3>
            <p>{vehicle.note}</p>
            <p>
              If this looks like your style, we can line up the next step and
              help you compare it with similar cars or bikes.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default VehicleDetailPage;
