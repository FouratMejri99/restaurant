import { useEffect, useState } from "react";
import Booking from "../booking/booking"; // import the component
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false); // popup state

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="logo">
              Arigat<span className="red-letter">o</span>
            </div>
          </div>

          <div className={`navbar-center ${isMobileMenuOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#menus">Menus</a>
            <button
              className="book-now mobile-only"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Now
            </button>
          </div>

          <div className="navbar-right">
            <button
              className="book-now desktop-only"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Now
            </button>
            <button
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              &#9776;
            </button>
          </div>
        </div>
      </nav>

      {isBookingOpen && <Booking onClose={() => setIsBookingOpen(false)} />}
    </>
  );
};

export default Navbar;
