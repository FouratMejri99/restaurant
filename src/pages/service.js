import service1 from "../assets/images/service-1.jpg";
import service2 from "../assets/images/service-2.jpg";
import service3 from "../assets/images/service-3.jpg";
import shape1 from "../assets/images/shape-1.png";
import shape2 from "../assets/images/shape-2.png";
import "./service.css";

const Service = () => {
  return (
    <section className="section service  text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>

        <h2 className="headline-1 section-title">We Offer Top Notch</h2>

        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever.
        </p>

        <ul className="grid-list">
          <li>
            <div className="service-card">
              <a href="/" className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": "285", "--height": "336" }}
                >
                  <img
                    src={service1}
                    width="285"
                    height="336"
                    alt="Breakfast"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="/">Breakfast</a>
                </h3>
                <a href="/" className="btn-text hover-underline label-2">
                  View Menu
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <a href="/" className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": "285", "--height": "336" }}
                >
                  <img
                    src={service2}
                    width="285"
                    height="336"
                    alt="Appetizers"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="/">Appetizers</a>
                </h3>
                <a href="/" className="btn-text hover-underline label-2">
                  View Menu
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <a href="/" className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": "285", "--height": "336" }}
                >
                  <img
                    src={service3}
                    width="285"
                    height="336"
                    alt="Drinks"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="/">Drinks</a>
                </h3>
                <a href="/" className="btn-text hover-underline label-2">
                  View Menu
                </a>
              </div>
            </div>
          </li>
        </ul>

        <img
          src={shape1}
          width="246"
          height="412"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <img
          src={shape2}
          width="343"
          height="345"
          alt="shape"
          className="shape shape-2 move-anim"
        />
      </div>
    </section>
  );
};

export default Service;
