// src/pages/AllMenu.js
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase"; // <-- make sure this is exported in your firebase.js
import "./Allmenu.css";

const AllMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  // Fetch menu items from Firestore
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (isOpen) {
      fetchMenu(); // fetch only when popup opens
    }
  }, [isOpen]);

  return (
    <>
      {/* Button to open popup */}
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        <span className="text text-1">View All Menu</span>
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="allmenu-overlay" onClick={() => setIsOpen(false)}>
          <div className="allmenu-popup" onClick={(e) => e.stopPropagation()}>
            <div className="allmenu-header">
              <h2 className="headline-1 allmenu-title">All Menu</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            <div className="allmenu-content">
              <ul className="allmenu-list">
                {menuItems.map((item) => (
                  <li key={item.id} className="allmenu-item">
                    <img
                      src={item.imageUrl?.replace(
                        "/upload/",
                        "/upload/w_150,h_150,c_fill/"
                      )}
                      alt={item.name}
                      className="allmenu-img"
                    />
                    <div className="allmenu-info">
                      <div className="allmenu-header-row">
                        <h3 className="title-3">{item.name}</h3>
                        {item.price && (
                          <span className="span title-2">${item.price}</span>
                        )}
                      </div>

                      {item.category && (
                        <span className="badge label-1">{item.category}</span>
                      )}
                      <p className="label-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllMenu;
