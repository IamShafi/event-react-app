import React from "react";
import CoverSection from "./components/CoverSection";
import About from "./components/About";
import MediaCarousel from "./components/MediaCarousel";

const App = () => {
  return (
    <div className="main">
      <CoverSection />
      <MediaCarousel/>
      <About />
    </div>
  );
};

export default App;
