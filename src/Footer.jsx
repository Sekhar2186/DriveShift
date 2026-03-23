function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="text">Contact Us</h2>
        <div className="footer-section1">

          <a>Phone: 9885083834</a>
          <a>Email: support@getcars.com</a>
          <a>Address: Auto nagar , Beside Sajju's massage centre</a>
        </div>
        <h2 className="text">Quick Links</h2>
        <div className="footer-section2">

          <a href="#">About Us</a>
          <a href="#">Our Models</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
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
