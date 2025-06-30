import React from "react";
import OrganiserImage from "../../public/image/organizer-bg.svg";
import OrganiserImageMobile from "../../public/image/organizer-bg.svg";

const Organiser = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center md:mb-[100px] my-[60px] md:mt-0 px-5 ">
      <div className="flex flex-col xl:flex-row items-center gap-[30px] md:gap-[63px] px-5">
        <div className="relative w-[327px] h-[270px] sm:w-[594px] sm:h-[351px] border border-white ml-[-20px] lg:ml-0">
          <img
            src={OrganiserImage}
            alt=""
            className="hidden lg:block w-[327px] h-[270px] sm:w-[594px] sm:h-[351px] mt-[15px] ml-[15px]"
          />
         <div className="w-[327px] h-[270px]"><img
            src={OrganiserImageMobile}
            alt=""
            className="block lg:hidden w-[327px] h-full object-cover mt-[15px] ml-[15px]"
          /></div>
        </div>
        
         
        <div className="flex flex-col w-full max-w-[527px]">
          <h1 className="text-[26px] lg:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase md:mb-[35px]">
            Hosted by{" "}
            <span className="font-[700] font-aeonik">Pulse Events </span>
          </h1>
          <p className="text-[14px] lg:text-[16px] font-inter font-[400] leading-[24px] text-white mb-5 md:mb-[25px]">Pulse Events is the creative force behind immersive cultural events — from music and art to nightlife experiences. We produce and host handpicked events that bring people together through bold energy and good vibes.</p>
          <p className="text-[14px] lg:text-[16px] font-inter font-[400] leading-[24px] text-white">Expect hypnotic beats, visual storytelling, and a high-energy crowd that knows how to move.</p>
        </div>
      </div>
    </div>
  );
};

export default Organiser;
