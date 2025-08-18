import "./App.css";
import bgVideo from "./assets/bg-video.mp4"; // Your video file
import Navbar from "./components/Navbar/navbar"; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="video-section">
        <video className="background-video" src={bgVideo} autoPlay loop muted />
        <div className="video-overlay">
          <div className="hero-text">
            <h1 className="animated-text">
              Flavors Inspired by
              <br />
              the Seasons
            </h1>
            <p className="animated-subtext">
              Come with family & feel the joy of mouthwatering food
            </p>
            <button className="hero-button">Explore Our Flavors</button>
          </div>
        </div>
      </div>
      <div className="content">
        {/* Your main content here */}
        <p>This is the rest of your page content...</p>
      </div>
    </div>
  );
}

export default App;
