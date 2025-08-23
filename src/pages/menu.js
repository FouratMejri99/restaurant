import menu1 from "../assets/images/menu-1.png";
import menu2 from "../assets/images/menu-2.png";
import menu3 from "../assets/images/menu-3.png";
import menu4 from "../assets/images/menu-4.png";
import menu5 from "../assets/images/menu-5.png";
import menu6 from "../assets/images/menu-6.png";
import shape5 from "../assets/images/shape-5.png";
import shape6 from "../assets/images/shape-6.png";
import "./pages.css";

// import the popup component
import AllMenu from "../components/menu/Allmenu";

const menuItems = [
  {
    title: "Greek Salad",
    price: "$25.50",
    badge: "Seasonal",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    img: menu1,
    alt: "Greek Salad",
  },
  {
    title: "Lasagne",
    price: "$40.00",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    img: menu2,
    alt: "Lasagne",
  },
  {
    title: "Butternut Pumpkin",
    price: "$10.00",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    img: menu3,
    alt: "Butternut Pumpkin",
  },
  {
    title: "Tokusen Wagyu",
    price: "$39.00",
    badge: "New",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    img: menu4,
    alt: "Tokusen Wagyu",
  },
  {
    title: "Olivas Rellenas",
    price: "$25.00",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    img: menu5,
    alt: "Olivas Rellenas",
  },
  {
    title: "Opu Fish",
    price: "$49.00",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    img: menu6,
    alt: "Opu Fish",
  },
];

const Menu = () => {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Special Selection
        </p>
        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

        <ul className="grid-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 100, "--height": 100 }}
                >
                  <img
                    src={item.img}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt={item.alt}
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="/" className="card-title">
                        {item.title}
                      </a>
                    </h3>
                    {item.badge && (
                      <span className="badge label-1">{item.badge}</span>
                    )}
                    <span className="span title-2">{item.price}</span>
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

        {/* Replace the button with AllMenu */}
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
