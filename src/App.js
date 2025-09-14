import { useEffect, useState } from "react";
import "./App.css";
import bgVideo from "./assets/bg-video.mp4";
import Navbar from "./components/Navbar/navbar";
import Footer from "./pages/footer/footer";
import MidSection from "./pages/midsection/midsection";
import Service from "./pages/service/service";

function App() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { weekday: "long", day: "numeric", month: "long" };
      const formattedDate = now.toLocaleDateString("en-US", options);
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateTime(`${formattedDate} / ${formattedTime}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Navbar />

      {/* Hero Section */}
      <div className="video-section" id="home">
        <video className="background-video" src={bgVideo} autoPlay loop muted />
        <div className="video-overlay">
          <div className="hero-text">
            <h1 className="animated-text">
              Arigat<span className="red-letter">o</span>
            </h1>
            <p className="animated-subtext">
              Come with family & feel the joy of mouthwatering food
            </p>
            <button
              className="btn"
              onClick={() => {
                document
                  .getElementById("midsection")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Menu
            </button>
          </div>

          {/* ⬇️ Date, Time & Weather Info */}
          <div className="hero-info">
            <p>{dateTime}</p>
            <p>9℃</p>
            <p>Sunrise 5:38 am / Sunset 6:23 pm</p>
          </div>
        </div>
      </div>

      <section id="Service">
        <Service />
      </section>

      <section id="midsection">
        <MidSection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
