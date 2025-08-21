import "./App.css";
import bgVideo from "./assets/bg-video.mp4";
import Navbar from "./components/Navbar/navbar";

function App() {
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
            <button className="btn">Explore Our Menu</button>
          </div>
        </div>
      </div>

      {/* About Us Section */}

      {/* Service Section 
      <section id="Service">
        <Service />
      </section>

      
      <section id="menu">
        <Menu />
      </section>

      <section id="footer">
        <Footer />
      </section>
      */}
    </div>
  );
}

export default App;
