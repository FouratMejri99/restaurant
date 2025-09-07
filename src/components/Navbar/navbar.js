import { useEffect, useState } from "react";
import Booking from "../booking/booking";
import Slider from "../slider/slider";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

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

          <div className="navbar-center">
            <a href="#home">Home</a>
            <a href="#Service">About Us</a>
            <a href="#menu">Menus</a>
            {/* Book Now button for mobile 
            <button
              className="book-now mobile-only"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Now
            </button>
            */}
          </div>

          <div className="navbar-right">
            {/* Book Now button for desktop 
            <button
              className="book-now desktop-only"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Now
            </button>
            */}
            <button className="hamburger" onClick={() => setIsSliderOpen(true)}>
              &#9776;
            </button>
          </div>
        </div>
      </nav>

      {/* Booking Modal */}
      {isBookingOpen && <Booking onClose={() => setIsBookingOpen(false)} />}

      {/* Slider Modal */}
      {isSliderOpen && <Slider onClose={() => setIsSliderOpen(false)} />}
    </>
  );
};

export default Navbar;
