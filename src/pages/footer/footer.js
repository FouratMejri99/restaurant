import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h2 className="footer-heading">Get in touch</h2>
          <p>hello@thewoodspeen.com</p>
          <p>01635 265 070</p>
          <p>
            The Woodspeen Restaurant & Cookery School <br />
            Lambourn Road, Woodspeen, Newbury, RG20 8BN
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">
            VIEW MAP
          </a>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h2 className="footer-heading">Sign up to our newsletter</h2>
          <p>
            Keep up to date with our latest news, events and recipes with our
            monthly newsletter.
          </p>
          <button className="footer-btn">SIGN UP NOW</button>
        </div>

        {/* Restaurants */}
        <div className="footer-section">
          <h2 className="footer-heading">Visit Our Restaurants</h2>
          <ul>
            <li>The Clockspire</li>
            <li>The Braywood</li>
            <li>The Boxford</li>
            <li>74 Charlotte Street</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h2 className="footer-heading">Follow Us</h2>
          <p>Facebook | Instagram</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>TERMS & CONDITIONS | PRIVACY</p>
        <p>COPYRIGHT © {new Date().getFullYear()} THE WOODSPEEN</p>
        <p>
          The Woodspeen is owned by The Woodspeen Restaurant Limited, a company
          registered in England and Wales under company number 08524322 and with
          our registered office at TVP2, 300 Thames Valley Park Drive, Reading,
          Berkshire, RG6 1PT.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
