// GiftExperience.js
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./gift.css";

const GiftExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Romantic Dinner for Two",
      description:
        "A candlelit evening with a specially curated menu for couples.",
      price: "$120",
      todayGift: "Chocolate-covered strawberries + a bottle of wine",
    },
    {
      id: 2,
      title: "Family Feast",
      description: "Enjoy a delicious multi-course meal with your family.",
      price: "$200",
      todayGift: "Free dessert platter for the whole family",
    },
    {
      id: 3,
      title: "Chef’s Tasting Experience",
      description: "A unique culinary journey guided by our head chef.",
      price: "$150",
      todayGift: "Chef’s special appetizer included",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      className="slider-page-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          color: "#c0392b",
          fontSize: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
          fontFamily: '"UnifrakturCook", cursive',
        }}
      >
        Today’s Surprise Gift
      </motion.h2>

      <div className="gift-list">
        <AnimatePresence>
          {!selected &&
            experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="gift-item clickable"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelected(exp)}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <span>{exp.price}</span>
              </motion.div>
            ))}

          {selected && (
            <motion.div
              key={selected.id}
              className="gift-item today-gift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3>{selected.title}</h3>
              <p>{selected.description}</p>
              <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
                Today’s Gift: {selected.todayGift}
              </p>
              <span>{selected.price}</span>
              <motion.button
                className="back-btn"
                onClick={() => setSelected(null)}
                whileHover={{ scale: 1.05 }}
              >
                ← Back
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GiftExperience;
