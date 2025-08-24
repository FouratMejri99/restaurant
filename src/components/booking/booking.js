import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Reservations from "../reservation/reservation";
import "./booking.css";

const times = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
];
const guests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Booking = ({ onClose }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [step, setStep] = useState("booking");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("reservations");
  };

  return (
    <div className="booking-overlay">
      <motion.div
        className="booking-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <AnimatePresence mode="wait">
          {step === "booking" && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="restaurant-form"
            >
              <h2 className="restaurant-title">🍷 Reserve Your Table</h2>
              <p className="restaurant-subtitle">
                Select your date, time, and number of guests
              </p>

              <form onSubmit={handleSubmit} className="booking-form">
                {/* Date */}
                <div className="form-group">
                  <label>Date</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="Pick a Date"
                    className="form-input"
                  />
                </div>

                {/* Time */}
                <div className="form-group">
                  <label>Time</label>
                  <select
                    className="form-input"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                  >
                    <option value="">Select Time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div className="form-group">
                  <label>Guests</label>
                  <select
                    className="form-input"
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(e.target.value)}
                    required
                  >
                    <option value="">Select Guests</option>
                    {guests.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="submit-btn"
                >
                  Reserve Now
                </motion.button>
              </form>
            </motion.div>
          )}

          {step === "reservations" && (
            <motion.div
              key="reservations"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Reservations
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                selectedGuests={selectedGuests}
                onClose={onClose}
                onBack={() => setStep("booking")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Booking;
