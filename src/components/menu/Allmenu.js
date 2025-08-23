import { useState } from "react";
import "./Allmenu.css";

const AllMenu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

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
                {menuItems.map((item, index) => (
                  <li key={index} className="allmenu-item">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="allmenu-img"
                    />
                    <div className="allmenu-info">
                      <h3 className="title-3">{item.title}</h3>
                      {item.badge && (
                        <span className="badge label-1">{item.badge}</span>
                      )}
                      <p className="label-1">{item.description}</p>
                      <span className="span title-2">{item.price}</span>
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
