import { Link } from 'react-router-dom';
import './Body.css';
import { bodyVehicles } from '../../../data/vehicles.js';

function Body() {
  return (
    <>
      {bodyVehicles.map((vehicle) => (
        <div className="card" key={vehicle.slug}>
          <img
            className="card-image"
            src={vehicle.image}
            alt={vehicle.homeTitle}
          />
          <h2 className="card-title">{vehicle.homeTitle}</h2>
          <p className="card-text">{vehicle.homeSpec}</p>
          <Link className="learn-more-button" to={`/vehicles/${vehicle.slug}`}>
            See More
          </Link>
        </div>
      ))}
    </>
  );
}

export default Body;
