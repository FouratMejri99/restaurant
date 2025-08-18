import { useState } from "react";
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
const options = ["Indoor", "Outdoor"];
const availableDates = ["2025-08-20", "2025-08-21", "2025-08-22", "2025-08-23"];

const Booking = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed for ${name} (${email}, ${phone}) on ${
        selectedDate || "selected time"
      } at ${selectedTime} for ${selectedGuests} guests (${selectedOption})`
    );
    onClose();
  };

  return (
    <div className="booking-overlay">
      <div className="booking-modal big-ui">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Book a Table</h2>

        {/* Top Inputs */}
        <form onSubmit={handleSubmit}>
          <div className="top-inputs">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Side-by-side selects with titles */}
          <div className="selects-row">
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

            <div className="select-group">
              <label>Option</label>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
              >
                <option value="">Select Option</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Other available dates as dropdown */}
          <div className="other-dates">
            <label>Available Dates</label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">Pick a Date</option>
              {availableDates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Reserve Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
