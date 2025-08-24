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
      <form onSubmit={handleSubmit} className="reservation-inputs">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
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
            className="form-input"
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
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select className="form-input" disabled>
            <option>Coming Soon 💳</option>
          </select>
        </div>

        <div className="form-actions">
          <motion.button
            type="button"
            className="back-btn"
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ⬅ Back
          </motion.button>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Confirm ✅
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Reservations;
