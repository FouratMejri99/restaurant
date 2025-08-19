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
            {/* 👇 wrap the 'o' in a span */}
            <h1 className="animated-text">
              Arigat<span className="red-letter">o</span>
            </h1>
            <p className="animated-subtext">
              Come with family & feel the joy of mouthwatering food
            </p>
            <button className="btn">Explore Our Flavors</button>
          </div>
        </div>
      </div>

      <div className="content">
        <p>This is the rest of your page content...</p>
      </div>
    </div>
  );
}

export default App;
