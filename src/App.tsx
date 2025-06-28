import React from "react";
import CoverSection from "./components/CoverSection";
import About from "./components/About";
import MediaCarousel from "./components/MediaCarousel";
import Organiser from "./components/Organiser";
import Venue from "./components/Venue";

const App = () => {
  return (
    <div className="main">
      <CoverSection />
      <MediaCarousel/>
      <About />
      <Organiser/>
      <Venue/>
    </div>
  );
};

export default App;
