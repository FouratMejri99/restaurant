import service1 from "../../assets/images/service-1.jpg";
import service2 from "../../assets/images/service-2.jpg";
import service3 from "../../assets/images/service-3.jpg";
import service4 from "../../assets/restaurant.png";
import "./service.css";

const services = [
  {
    id: 1,
    title: "MENUS",
    img: service1,
    text: "A la carte, set menu, Sunday Roast, vegan, children – all our menus at a glance.",
  },
  {
    id: 2,
    title: "THE BAR",
    img: service2,
    text: "Guests don't just visit The Woodspeen for the food. Our destination cocktail bar is a chic spot for casual drinks and classic flair.",
  },
  {
    id: 3,
    title: "COOKERY COURSES",
    img: service3,
    text: "Hone your culinary skills with hands-on cookery courses, designed and delivered by our very own chefs.",
  },
  {
    id: 4,
    title: "GIFT VOUCHERS",
    img: service4,
    text: "Our gift vouchers make thoughtful foodie presents. Redeem on drinks, dining or cookery courses – the choice is yours.",
  },
];

const Service = () => {
  return (
    <section className="service-section">
      <div className="service-header">
        <h2>Welcome to Arigato Dining</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="image-wrapper">
              <img src={service.img} alt={service.title} />
              <h3 className="image-title">{service.title}</h3>
            </div>
            <p className="card-text">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
