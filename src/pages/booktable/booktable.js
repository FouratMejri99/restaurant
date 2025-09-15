import { addDoc, collection } from "firebase/firestore";
import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "../../firebase"; // Adjust the path
import "./booktable.css";

const BookTable = ({ time, date, guests, setPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: date || "",
    time: time || "",
    guests: guests || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), formData);
      alert("Table booked successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
      });
      setPage("planning"); // go back after booking
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to book table. Please try again.");
    }
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
        <motion.h2 className="headline-1 section-title text-center">
          Book a Table
        </motion.h2>

        <motion.form className="booking-form" onSubmit={handleSubmit}>
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Date", name: "date", type: "date" },
            { label: "Time", name: "time", type: "time" },
            { label: "Guests", name: "guests", type: "number" },
          ].map((field, index) => (
            <div className="form-group" key={index}>
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          ))}

          <motion.button type="submit" className="btn-submit">
            Book Now
          </motion.button>

          <button type="button" onClick={() => setPage("planning")}>
            Back
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default BookTable;
