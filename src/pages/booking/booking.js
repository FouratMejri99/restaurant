import { motion } from "framer-motion";
import restaurant from "../../assets/restaurant.png";
import Displayer from "../../components/Displayer/Displayer";
import Planning from "../../components/Planing/planing";
import "./booking.css";

const Booking = ({ onClose }) => {
  return (
    <div className="booking-overlay">
      <motion.div
        className="booking-modal"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2 className="booking-title">Book A Table</h2>

        <img src={restaurant} alt="Booking" className="booking-image" />

        <Displayer />

        <Planning />
      </motion.div>
    </div>
  );
};

export default Booking;
