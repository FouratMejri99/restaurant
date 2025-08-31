import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import shape5 from "../assets/images/shape-5.png";
import shape6 from "../assets/images/shape-6.png";
import { db } from "../firebase";
import "./pages.css";

// import the popup component
import AllMenu from "../components/menu/Allmenu";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const q = query(collection(db, "menu"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <p className="text-center">Loading menu...</p>;

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Special Selection
        </p>
        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

        <ul className="grid-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                    loading="lazy"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="/" className="card-title">
                        {item.name}
                      </a>
                    </h3>
                    {item.category && (
                      <span className="badge label-1">{item.category}</span>
                    )}
                    {item.price && (
                      <span className="span title-2">{item.price} $</span>
                    )}
                  </div>
                  <p className="card-text label-1">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="menu-text text-center">
          During winter daily from <span className="span">7:00 pm</span> to{" "}
          <span className="span">9:00 pm</span>
        </p>

        <AllMenu menuItems={menuItems} />

        <img
          src={shape5}
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <img
          src={shape6}
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default Menu;
