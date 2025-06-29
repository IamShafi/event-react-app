import React from "react";
import AboutBG from "../../public/image/about-pulse-event.svg";
import MobileAboutBG from "../../public/image/mobile-about-pulse-event.svg";
import AboutImage from "../../public/image/people-concert_drum-mobile.svg";
import MoreInfoCard from "./MoreInfoCard";
const About = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center md:mb-[100px]">
      {/* ABOUT Section with Background */}
      <section
        className="relative w-full flex items-center mt-[88px] h-[934px] md:h-[544px]"
        style={{
          backgroundImage: `url('${MobileAboutBG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url('${AboutBG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="w-full max-w-[577px] flex flex-col my-[50px] md:my-[80px] mx-[20px] md:ml-[120px] relative z-10">
          <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mt-[50px] md:mt-0 mb-[20px] md:mb-[25px]">
            ABOUT <span className="font-[700] font-aeonik">THE EVENT</span>
          </h1>
          {/* Line */}
          <div
            className="w-[226px] h-[1px] mb-[25px] md:mb-[35px]"
            style={{
              background: "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%)",
            }}
          ></div>
          <p className="text-[14px] md:text-[16px] font-inter font-[400] leading-[24px] text-white mb-[20px] md:mb-[25px]">
            Warehouse Rhythms is a curated night of deep house, techno, and
            underground energy. Set in a raw industrial space with immersive
            sound and lighting, this event brings together music lovers,
            creatives, and the late-night community for a one-of-a-kind sensory
            experience.
          </p>
          <p className="text-[14px] md:text-[16px] font-inter font-[400] leading-[24px] text-white mb-[25px] md:mb-[35px]">
            Expect hypnotic beats, visual storytelling, and a high-energy crowd
            that knows how to move.
          </p>
          <MoreInfoCard />
          <div className="sm:hidden w-full flex items-center justify-center">
            <img src={AboutImage} alt="" className="w-[375px] h-[336px] mt-4 mb-15"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
