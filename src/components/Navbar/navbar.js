import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Booking from "../booking/booking"; // import the component
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false); // booking modal
  const [showCongrats, setShowCongrats] = useState(false); // congrats popup

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
            <a href="#Service">About Us</a>
            <a href="#menu">Menus</a>
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

      {/* Booking Modal */}
      {isBookingOpen && (
        <Booking
          onClose={() => setIsBookingOpen(false)}
          showCongrats={showCongrats}
          setShowCongrats={setShowCongrats}
        />
      )}

      {/* Global Congrats Popup */}
      <AnimatePresence>
        {showCongrats && (
          <motion.div
            className="global-congrats-popup"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M20.285 6.708l-11.025 11.025-5.545-5.546 1.414-1.414 4.131 4.131 9.611-9.611z" />
            </svg>
            <p>
              🎉 Congrats! Your booking is confirmed. We will contact you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
