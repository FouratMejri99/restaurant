import { addDoc, collection, Timestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import restau1 from "../../assets/restaurant.png";
import restau2 from "../../assets/restaurant2.png";
import restau3 from "../../assets/restaurant3.png";
import restau4 from "../../assets/restaurant4.png";
import { db } from "../../firebase"; // 👈 Import Firestore
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
const images = [restau1, restau2, restau3, restau4];

const Booking = ({ onClose, showCongrats, setShowCongrats }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      selectedName &&
      selectedEmail &&
      selectedNumber &&
      selectedDate &&
      selectedTime &&
      selectedGuests
    ) {
      try {
        // Save booking to Firestore
        await addDoc(collection(db, "bookings"), {
          name: selectedName,
          email: selectedEmail,
          phone: selectedNumber,
          date: Timestamp.fromDate(selectedDate), // Firestore Timestamp
          time: selectedTime,
          guests: selectedGuests,
          createdAt: Timestamp.now(),
        });

        // Close booking modal
        onClose();
        setShowCongrats(true);

        // Hide after 3 seconds
        setTimeout(() => setShowCongrats(false), 3000);
      } catch (error) {
        console.error("Error saving booking: ", error);
        alert("Failed to save booking. Try again.");
      }
    } else {
      alert("Please fill in all fields correctly!");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="booking-overlay">
      <motion.div
        className="booking-modal fullpage-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <motion.div
          className="restaurant-form fullpage-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="restaurant-title">🍷 Reserve Your Table</h2>
          <p className="restaurant-subtitle">
            Select your date, time, and number of guests
          </p>

          {/* Image Slider */}
          <div className="booking-hero">
            <Slider {...sliderSettings}>
              {images.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`Restaurant ${idx + 1}`}
                    className="hero-image"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="booking-form scrollable-form"
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
                placeholder="Your Name"
                className="form-input small-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={selectedEmail}
                onChange={(e) => setSelectedEmail(e.target.value)}
                placeholder="Your Email"
                className="form-input small-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={selectedNumber}
                onChange={(e) => setSelectedNumber(e.target.value)}
                placeholder="Your Phone"
                className="form-input small-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Pick a Date"
                className="form-input small-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <select
                className="form-input small-input"
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

            <div className="form-group">
              <label>Guests</label>
              <select
                className="form-input small-input"
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
              className="submit-btn small-btn"
            >
              Reserve Table Now
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Booking;
