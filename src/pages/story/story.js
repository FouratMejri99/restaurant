// OurStory.js
import { motion } from "framer-motion";
import img1 from "../../assets/restaurant.png";
import img2 from "../../assets/restaurant2.png";
import img3 from "../../assets/restaurant3.png";
import "./story.css";

const OurStory = () => {
  const history = [
    {
      year: "2005",
      title: "The Beginning",
      text: "Our restaurant was founded with a vision to create authentic, home-made cuisine. Starting as a small bistro, we focused on fresh ingredients and a warm, welcoming atmosphere for every guest.",
      image: img1,
    },
    {
      year: "2010",
      title: "Growth & Recognition",
      text: "By 2010, we expanded our dining space and introduced seasonal menus. Local critics recognized our innovation and quality, helping us grow our loyal customer base.",
      image: img2,
    },
    {
      year: "2020",
      title: "Today",
      text: "Today, we offer unique culinary experiences, including private events, chef's tables, and tasting sessions. Our mission remains to create memorable moments through food and hospitality.",
      image: img3,
    },
  ];

  return (
    <motion.div
      className="story-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="story-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Story
      </motion.h2>

      <div className="history-timeline">
        {history.map((item, index) => (
          <motion.div
            className={`history-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div className="history-image" whileHover={{ scale: 1.05 }}>
              <img src={item.image} alt={item.title} />
            </motion.div>
            <div className="history-content">
              <h3>
                {item.year} - {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurStory;
