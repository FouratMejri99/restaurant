import { motion } from "framer-motion";
import "./booking.css";

const Booking = ({ onClose }) => {
  return (
    <div className="booking-overlay">
      <motion.div
        className="booking-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </motion.div>
    </div>
  );
};

export default Booking;
