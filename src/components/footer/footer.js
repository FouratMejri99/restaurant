import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About / Contact */}
        <div className="footer-section">
          <h3>Arigato Dining</h3>
          <p>123 Food Street, Gourmet City</p>
          <p>Phone: +216 123 456 789</p>
          <p>Email: info@arigatodining.com</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
          <p>Sat - Sun: 12:00 PM - 11:00 PM</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Arigato Dining. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
