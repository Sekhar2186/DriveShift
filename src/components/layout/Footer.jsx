function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <h2 className="text">Contact Us</h2>
        <div className="footer-section1">

          <p>Phone: 9885083834</p>
          <p>Email: support@getcars.com</p>
          <p>Address: Auto nagar , Beside Sajju's massage centre</p>
        </div>
        <h2 className="text">Quick Links</h2>
        <div className="footer-section2">

          <a href="#about">About Us</a>
          <a href="#models">Our Models</a>
          <a href="#service">Services</a>
          <a href="#contact">Contact Us</a>
          <a href="#">FAQs</a>
        </div>
        <h2 className="text" >Follow Us</h2>
        <div className="footer-section3">

          <a href="#" className="social-icon"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin"></i> LinkedIn</a>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Get Cars. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
