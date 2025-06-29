import React from "react";
import Header from "../Header";
import MobileHeroImage from "../../../public/image/BookingSuccess-herobg-mobile.svg";
import HeroImage from "../../../public/image/BookingSuccess-herobg.svg";
import CoverInfoOverlay from "./CoverInfoOverlay";

const CoverSection = () => {
  return (
    <div className="w-full mx-auto relative">
      <Header />
      {/* Background Image */}
      {/* Hero Section with Background */}{" "}
      <section
        className="relative w-full flex items-center justify-center h-[500px] md:h-[419px]"
        style={{
          backgroundImage: `url('${MobileHeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url('${HeroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Black Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40"></div>
        {/* Content */}
        <div className="w-full flex items-center justify-center mt-[476px] mb-10 md:mb-15 z-20">
          <CoverInfoOverlay />
        </div>
      </section>
    </div>
  );
};

export default CoverSection;
