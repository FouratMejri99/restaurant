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
      <div className="booking-modal big-ui">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <AnimatePresence mode="wait">
          {step === "booking" && (
            <motion.div
              key="booking"
              initial={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="restaurant-form"
            >
              <h2 className="restaurant-title">🍽️ Arigato Dining</h2>

              <form onSubmit={handleSubmit}>
                <div className="selects-row">
                  {/* Time */}
                  <div className="select-group">
                    <label>Time</label>
                    <select
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
                  <div className="select-group">
                    <label>Guests</label>
                    <select
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

                  {/* Date */}
                  <div className="select-group">
                    <label>Date</label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      placeholderText="Pick a Date"
                      customInput={
                        <button type="button" className="custom-select-btn">
                          {selectedDate
                            ? selectedDate.toDateString()
                            : "Pick a Date"}
                        </button>
                      }
                      calendarClassName="custom-calendar"
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn restaurant-btn">
                  Reserve Table
                </button>
              </form>
            </motion.div>
          )}

          {step === "reservations" && (
            <motion.div
              key="reservations"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
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
      </div>
    </div>
  );
};

export default Booking;
