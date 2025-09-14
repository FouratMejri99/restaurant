import diningImg from "../../assets/restaurant.png"; // replace with your image
import "./midsection.css";

const MidSection = () => {
  return (
    <section
      className="mid-section"
      style={{ backgroundImage: `url(${diningImg})` }}
    >
      <div className="mid-overlay">
        <h2>Private Dining at The Cookery School</h2>
        <button
          className="mid-btn"
          onClick={() => alert("Redirect to details page or booking")}
        >
          Click Here
        </button>
      </div>
    </section>
  );
};

export default MidSection;
