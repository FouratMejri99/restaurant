// CorporateTeam.js
import { motion } from "framer-motion";
import challenge from "../../assets/challenge.jpg";
import cheff from "../../assets/cheff.jpg";
import shape5 from "../../assets/images/shape-5.png";
import shape6 from "../../assets/images/shape-6.png";
import wine from "../../assets/wine.webp";
import "./corporate.css";

const CorporateTeam = ({ onClose }) => {
  const activities = [
    {
      title: "Cooking Challenge",
      description:
        "Teams compete to prepare the best dish under the guidance of our chefs. Fun, competitive, and delicious!",
      image: challenge,
    },
    {
      title: "Wine & Dine Experience",
      description:
        "Learn wine pairing and fine dining etiquette with your team in a relaxed setting.",
      image: wine,
    },
    {
      title: "Chef’s Masterclass",
      description:
        "A hands-on culinary workshop where teams learn new skills and enjoy the fruits of their labor.",
      image: cheff,
    },
  ];

  return (
    <motion.div
      className="slider-fullscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Close Button */}
      <motion.button
        className="close-btn-center"
        onClick={onClose}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        ✖
      </motion.button>

      <motion.div className="slider-page-content">
        <motion.h2
          className="col-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Corporate Team-Building
        </motion.h2>

        <ul className="story-grid">
          {activities.map((act, index) => (
            <motion.li
              key={index}
              className="story-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <figure className="card-banner img-holder">
                <img src={act.image} alt={act.title} className="img-cover" />
              </figure>
              <div className="card-content">
                <h3>{act.title}</h3>
                <p>{act.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.img
          src={shape5}
          width="921"
          height="1036"
          alt="shape"
          className="shape shape-2 move-anim"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={shape6}
          width="343"
          height="345"
          alt="shape"
          className="shape shape-3 move-anim"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CorporateTeam;
