import { motion } from "framer-motion";
import { useState } from "react";
import "./reservation.css";
const Reservations = ({
  selectedDate,
  selectedTime,
  selectedGuests,
  onClose,
  onBack,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed 🎉\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${
        selectedDate ? selectedDate.toDateString() : "No Date"
      }\nTime: ${selectedTime}\nGuests: ${selectedGuests}`
    );
    onClose();
  };

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="reservation-form"
    >
      <h2 className="form-title">Complete Your Reservation 🍽️</h2>
      <p className="form-subtitle">
        {selectedDate ? selectedDate.toDateString() : "No Date"} <br />
        {selectedTime} · {selectedGuests} Guests
      </p>

      <form onSubmit={handleSubmit} className="reservation-inputs">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            placeholder="+216 99 123 456"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Future payment dropdown (placeholder for now) */}
        <div className="form-group">
          <label>Payment Method</label>
          <select disabled>
            <option>Coming Soon 💳</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="back-btn" onClick={onBack}>
            ⬅ Back
          </button>
          <button type="submit" className="submit-btn">
            Confirm Reservation ✅
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Reservations;
