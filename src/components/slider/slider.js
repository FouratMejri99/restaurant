import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BookTable from "../../pages/booktable/booktable";
import CorporateTeam from "../../pages/coorporateteam/CorporateTeam";
import GiftExperience from "../../pages/gift/giftexperience";
import Menu from "../../pages/menu";
import OurStory from "../../pages/story/story";
import "./slider.css";

const Slider = ({ onClose }) => {
  const [page, setPage] = useState("main"); // main or gift

  return (
    <motion.div
      className="slider-fullscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.button
        className="close-btn-center"
        onClick={onClose}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        ✖
      </motion.button>

      <AnimatePresence mode="wait">
        {page === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="slider-columns-fullscreen"
          >
            {/* Column 1 */}
            <div className="slider-col">
              <motion.h3 className="col-title">Dining</motion.h3>
              <ul>
                <li>
                  <a onClick={() => setPage("booktable")}>BOOK A TABLE</a>
                </li>
                <li>
                  <a onClick={() => setPage("menuslider")}>MENUS</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="slider-col">
              <motion.h3 className="col-title">Cooking</motion.h3>
              <ul>
                <li>
                  <a onClick={() => setPage("gift")}>GIFT EXPERIENCES</a>
                </li>
                <li>
                  <a onClick={() => setPage("corporate")}>
                    CORPORATE TEAMBUILDING
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="slider-col">
              <motion.h3 className="col-title">Book Now</motion.h3>
              <ul>
                <li>
                  <a onClick={() => setPage("story")}>Our Story</a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        {page === "gift" && (
          <motion.div
            key="gift"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="slider-page-content"
          >
            <GiftExperience />
            <motion.button
              onClick={() => setPage("main")}
              className="back-btn"
              whileHover={{ scale: 1.1 }}
            >
              ← Back
            </motion.button>
          </motion.div>
        )}
        {page === "story" && (
          <motion.div
            key="story"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="slider-page-content"
          >
            <OurStory />
            <motion.button
              onClick={() => setPage("main")}
              className="back-btn"
              whileHover={{ scale: 1.1 }}
            >
              ← Back
            </motion.button>
          </motion.div>
        )}
        {page === "booktable" && (
          <motion.div
            key="booktable"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="slider-page-content"
          >
            <BookTable />
            <motion.button
              onClick={() => setPage("main")}
              className="back-btn"
              whileHover={{ scale: 1.1 }}
            >
              ← Back
            </motion.button>
          </motion.div>
        )}

        {page === "corporate" && (
          <motion.div
            key="corporate"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="slider-page-content"
          >
            <CorporateTeam />
            <motion.button
              onClick={() => setPage("main")}
              className="back-btn"
              whileHover={{ scale: 1.1 }}
            >
              ← Back
            </motion.button>
          </motion.div>
        )}

        {page === "menuslider" && (
          <motion.div
            key="menuslider"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="slider-page-content"
          >
            <Menu />
            <motion.button
              onClick={() => setPage("main")}
              className="back-btn"
              whileHover={{ scale: 1.1 }}
            >
              ← Back
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Slider;
