import React from "react";
import HeroImage from "../../public/image/hero-bg.svg";
import Header from "./Header";
import CoverInfoOverlay from "./CoverInfoOverlay";

const CoverSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative">
      <Header />
      {/* Background Image */}
      {/* Hero Section with Background */}
      <section
        className="relative w-full h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('${HeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        {/* Noise Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle, #FFFFFF0F 1px, transparent 1px)`,
            backgroundSize: "2px 2px",
            opacity: 0.5,
          }}
        />
        {/* Black Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40"></div>
        {/* Content */}
        <div className="w-full flex items-center justify-center mt-[317px] mb-10 md:mb-15 z-20">
          <CoverInfoOverlay />
        </div>
      </section>
    </div>
  );
};

export default CoverSection;
