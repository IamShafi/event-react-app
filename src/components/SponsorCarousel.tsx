import React from "react";
import Icon1SVG from "../../public/image/sponsor-1.svg";
import Icon2SVG from "../../public/image/sponsor-2.svg";
import Icon3SVG from "../../public/image/sponsor-3.svg";
import Icon4SVG from "../../public/image/sponsor-4.svg";
import Icon5SVG from "../../public/image/sponsor-5.svg";

const SponsorCarousel = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-[80px] mb-[100px] flex flex-col items-center">
      <h1 className="text-[42px] font-aeonik font-normal leading-[53px] text-white uppercase md:mb-[50px]">
        Other <span className="font-[700] font-aeonik">Sponsors</span>
      </h1>
      <div className="w-full max-w-[1440px] overflow-hidden">
        <div className="flex flex-row gap-[130px] items-start justify-start overflow-x-auto scrollbar-hide">
          <img
            src={Icon1SVG}
            alt="about image"
            className="w-[164px] md:w-[164px] h-[42px] md:h-[42px] flex-shrink-0"
          />
          <img
            src={Icon2SVG}
            alt="about image"
            className="w-[201px] h-[41px] md:h-[41px] flex-shrink-0"
          />
          <img
            src={Icon3SVG}
            alt="about image"
            className="w-[109px] h-[59px] md:h-[59px] flex-shrink-0"
          />
          <img
            src={Icon4SVG}
            alt="about image"
            className="w-[209px] h-[28px] md:h-[28px] flex-shrink-0"
          />
          <img
            src={Icon5SVG}
            alt="about image"
            className="w-[137px] h-[56px] md:h-[56px] flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorCarousel;
