import { motion } from "framer-motion";
import { useState } from "react";
import restaurant from "../../assets/restaurant.png";
import Displayer from "../../components/Displayer/Displayer";
import MapCard from "../../components/MapCard/map";
import BookTable from "../booktable/booktable";
import "./booking.css";

const Booking = ({ onClose }) => {
  const [selectedTime, setSelectedTime] = useState(null); // store selected time

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

        <div className="booking-content-horizontal">
          <Displayer setSelectedTime={setSelectedTime} />
          <MapCard />
        </div>

        {/* Conditionally render BookATable inside the overlay */}
        {selectedTime && <BookTable selectedTime={selectedTime} />}
      </motion.div>
    </div>
  );
};

export default Booking;
