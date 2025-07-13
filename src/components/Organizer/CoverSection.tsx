import React from "react";
import Header from "../Header";

type CoverSectionProps = {
  mobileHeroImage: string; // Path to mobile background
  desktopHeroImage: string; // Path to desktop background
  mobileHeight?: string; // Optional custom height for mobile
  desktopHeight?: string; // Optional custom height for desktop
  withNoiseOverlay?: boolean; // For homepage effect
  overlayPositionClass?: string; // mt/mb/tweaks for positioning CoverInfoOverlay
};

const CoverInfoOverlay = () => {
  return (
    <>
      <div
        className="w-full max-w-[335px] md:max-w-[557px] flex flex-col items-center justify-center py-[24px] md:py-[28px] px-[24px] md:px-[30px]"
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(97.99deg, rgba(255, 255, 255, 0.3) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.3) 100.55%)",
          borderImageSlice: 1,
          background: "#FFFFFF1A",
        }}
      >
        <h1 className="h-[27px] md:h-[45px] text-center text-[38px] md:text-[64px] font-aeonik font-[900] leading-[43px] md:leading-[65px] text-white uppercase">
          <span className="font-[400] font-aeonik">PULSE </span>
          EVENTS
        </h1>
        <p className="text-center text-[14px] md:text-[16px] text-white font-inter font-[400] leading-[20px] md:leading-[30px] uppercase mt-[20px] md:mt-[30px]">
          Creating unforgettable live experiences since 2017.
        </p>
      </div>
    </>
  );
};

const CoverSection: React.FC<CoverSectionProps> = ({
  mobileHeroImage,
  desktopHeroImage,
  mobileHeight = "h-[419px]",
  desktopHeight = "md:h-[519px]",
  withNoiseOverlay = false,
  overlayPositionClass = "mt-[476px] mb-10 md:mb-15",
}) => {
  return (
    <div className="w-full mx-auto relative">
      <Header />

      {/* Hero Section with Background */}
      <section
        className={`relative w-full flex items-center justify-center ${mobileHeight} ${desktopHeight}`}
        style={{
          backgroundImage: `url('${mobileHeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url('${desktopHeroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Optional Noise Overlay */}
        {withNoiseOverlay && (
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle, #FFFFFF0F 1px, transparent 1px)`,
              backgroundSize: "2px 2px",
              opacity: 0.5,
            }}
          />
        )}

        {/* Black Gradient Overlay bg-gradient-to-b from-black/0 via-black/10 to-black/40*/}
        <div
          className="absolute inset-0 "
          style={{
            background:
              "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 19.24%)",
          }}
        />

        {/* Content */}
        <div
          className={`overlayPosition w-full flex items-center justify-center z-20 ${overlayPositionClass}`}
        >
          <CoverInfoOverlay />
        </div>
      </section>
    </div>
  );
};

export default CoverSection;
