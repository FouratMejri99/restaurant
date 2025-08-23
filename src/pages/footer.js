import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-name">Arigato Restaurant</h2>
        <p className="footer-info">
          📍 123 Flavor Street, Food City <br />
          📞 +1 234 567 890 <br />
          ✉️ info@arigato.com
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Arigato Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
