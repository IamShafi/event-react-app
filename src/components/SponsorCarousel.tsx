import React, { useEffect, useRef } from "react";
import Icon1SVG from "../../public/image/sponsor-1.svg";
import Icon2SVG from "../../public/image/sponsor-2.svg";
import Icon3SVG from "../../public/image/sponsor-3.svg";
import Icon4SVG from "../../public/image/sponsor-4.svg";
import Icon5SVG from "../../public/image/sponsor-5.svg";
import Icon6SVG from "../../public/image/sponsor-6.svg";
import Icon7SVG from "../../public/image/sponsor-7.svg";
import Icon8SVG from "../../public/image/sponsor-8.svg";

const SponsorCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const scrollInterval = 30; // milliseconds

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      carousel.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto my-[60px] lg:mt-[80px] lg:mb-[100px] flex flex-col items-center">
      <h1 className="text-center text-[26px] md:text-[42px] font-aeonik font-normal leading-[53px] text-white uppercase mb-10 md:mb-[50px]">
        Other <span className="font-[700] font-aeonik">Sponsors</span>
      </h1>
      {/* Desktop */}
      <div className="w-full max-w-[1440px] overflow-hidden">
        <div 
          ref={carouselRef}
          className="w-full hidden lg:flex flex-row gap-[130px] items-start justify-start overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
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
          <img
            src={Icon6SVG}
            alt="about image"
            className="w-[137px] h-[56px] md:h-[56px] flex-shrink-0"
          />
          <img
            src={Icon7SVG}
            alt="about image"
            className="w-[137px] h-[56px] md:h-[56px] flex-shrink-0"
          />
          <img
            src={Icon8SVG}
            alt="about image"
            className="w-[137px] h-[56px] md:h-[56px] flex-shrink-0"
          />
          {/* Duplicate images for seamless loop */}
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
          <img
            src={Icon6SVG}
            alt="about image"
            className="w-[137px] h-[56px] md:h-[56px] flex-shrink-0"
          />
          <img
            src={Icon7SVG}
            alt="about image"
            className="w-[137px] h-[56px] md:h-[56px] flex-shrink-0"
          />
          <img
            src={Icon8SVG}
            alt="about image"
            className="w-[137px] h-[56px] md:h-[56px] flex-shrink-0"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden flex-row gap-[] justify-between w-full max-w-[322px]">
        <div className="w-full max-w-[99px] flex flex-col gap-[52px] items-center">
          <img
            src={Icon1SVG}
            alt="about image"
            className="w-[99px] h-[25px] flex-shrink-0"
          />
          <img
            src={Icon3SVG}
            alt="about image"
            className="w-[78px] h-[43px] flex-shrink-0"
          />
          <img
            src={Icon5SVG}
            alt="about image"
            className="w-[99px] h-[41px] flex-shrink-0"
          />
          <img
            src={Icon6SVG}
            alt="about image"
            className="w-[86px] h-[41px] flex-shrink-0"
          />
        </div>
        <div className="w-full max-w-[153px] flex flex-col gap-[57px] item-center">
          <img
            src={Icon2SVG}
            alt="about image"
            className="w-[152px] h-[29px] "
          />
          <img
            src={Icon4SVG}
            alt="about image"
            className="w-[152px] h-[20px] "
          />
          <img src={Icon7SVG} alt="about image" className="w-[86px] h-[43px]" />
          <img
            src={Icon8SVG}
            alt="about image"
            className="w-[73px] h-[38px] "
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorCarousel;
