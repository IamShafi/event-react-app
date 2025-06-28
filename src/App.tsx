import React from "react";
import CoverSection from "./components/CoverSection";
import About from "./components/About";
import MediaCarousel from "./components/MediaCarousel";
import Organiser from "./components/Organiser";

const App = () => {
  return (
    <div className="main">
      <CoverSection />
      <MediaCarousel/>
      <About />
      <Organiser/>
    </div>
  );
};

export default App;
