import React from "react";
import AboutImage from "../../../public/image/organizer-about-bg.svg";
import MobileVenueImage from "../../../public/image/organizer-about-bg-mobile.svg";
import RightAboutImage from "../../../public/image/organizer-about-image-desktop.svg";

const About = () => {
  return (
    <div className="mt-[100px] w-full max-w-[1440px] mx-auto flex items-center justify-center">
      <section
        className="relative w-full "
        style={{
          backgroundColor: "#000000B2",
        }}
      >
        {/* Mobile Background image with opacity */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url('${MobileVenueImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
            height: "586px",
          }}
        />

        {/* Desktop Background image with opacity */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url('${AboutImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
            height: "442px",
          }}
        />

        {/* Content overlay */}
        <div
          className="px-5 relative z-10 w-full flex flex-col md:flex-row gap-5 justify-between 
        md:items-center md:gap-10  mt-12 md:mt-[40px] xl:pr-[145px] md:px-0"
        >
          <div className="w-full max-w-[577px] flex flex-col  md:pl-[120px]">
            <h1 className="text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-5 md:mb-[25px]">
              ABOUT <span className="font-[700] font-aeonik">PULSE EVENT</span>
            </h1>
            {/* Line */}
            <div
              className="w-[226px] h-[1px] mb-6 md:mb-[35px]"
              style={{
                border: "1px solid",

                borderImageSource:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 35.1%)",
                borderImageSlice: 1,
              }}
            ></div>
            <p className="text-[16px] font-inter font-[400] leading-[24px] text-white mb-6 md:mb-[25px]">
              Pulse Events is a creative collective focused on bringing
              immersive concerts, cultural shows, and art-driven experiences to
              life. With a track record of hosting genre-defying acts and
              unforgettable nights, we believe in connecting people through
              sound, light, and shared moments.
            </p>
            <p className="text-[16px] font-inter font-[400] leading-[24px] text-white md:mb-[35px]">
              Whether it’s a rooftop jazz session or an underground electronic
              rave, Pulse curates each event to spark emotion and inspire
              community.
            </p>
          </div>
          <div className="w-[355px] h-[221px] md:w-[643px] md:h-[399px]">
            <img
              src={RightAboutImage}
              alt="about image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
