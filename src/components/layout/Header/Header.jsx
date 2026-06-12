import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <h1 className="mainhead">Welcome to DriveSift</h1>
      <nav className="site-nav" aria-label="Primary">
        <div className="nav-shell">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/models">Models</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          {/*<div className="nav-actions">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="search-button" type="button">
                Search
              </button>
            </div>
            <button className="wishlist-button" type="button" aria-label="Wishlist">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </button>
          </div>
          */}
        </div>
      </nav>
    </>
  );
}

export default Header;
