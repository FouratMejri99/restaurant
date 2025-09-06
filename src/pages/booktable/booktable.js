// BookTable.js
import { motion } from "framer-motion";
import { useState } from "react";
import "./booktable.css";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", formData);
    // Here you can integrate Firebase or API to save booking
    alert("Table booked successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
    });
  };

  return (
    <motion.section
      className="section book-table"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h2
          className="headline-1 section-title text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Book a Table
        </motion.h2>
        <motion.p
          className="section-subtitle text-center label-2"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Reserve your spot in advance
        </motion.p>

        <motion.form
          className="booking-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Date", name: "date", type: "date" },
            { label: "Time", name: "time", type: "time" },
            { label: "Guests", name: "guests", type: "number" },
          ].map((field, index) => (
            <motion.div
              className="form-group"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="form-input"
                required
              />
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="btn-submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default BookTable;
