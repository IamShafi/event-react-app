import { useEffect, useRef } from 'react'
// import PlaySVG from "../../public/logo/Play.svg";
import Icon1SVG from "../../public/image/about-img-1.svg";
import Icon2SVG from "../../public/image/about-img-2.svg";
import Icon3SVG from "../../public/image/about-img-3.svg";
import Icon4SVG from "../../public/image/about-img-4.svg";

const MediaCarousel = () => {
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = desktopCarouselRef.current;
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

  useEffect(() => {
    const carousel = mobileCarouselRef.current;
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
    <>
      {/* Desktop Carousel */}
      <div className="w-full max-w-[1440px] overflow-hidden hidden lg:flex mx-auto px-5 mt-[162px] mb-[80px] flex-row items-start justify-center">
        <div
          ref={desktopCarouselRef}
          className="w-full flex flex-row gap-4 items-start justify-start overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          <img src={Icon1SVG} alt="about image" className="w-[351px] md:w-[511.46px] h-[226px] md:h-[329px] flex-shrink-0" />
          <img src={Icon2SVG} alt="about image" className="w-[190px] md:w-[277.28px] h-[226px] md:h-[329px] flex-shrink-0" />
          <img src={Icon3SVG} alt="about image" className="w-[190px] md:w-[277.28px] h-[226px] md:h-[329px] flex-shrink-0" />
          <img src={Icon4SVG} alt="about image" className="w-[251px] md:w-[474.82px] h-[226px] md:h-[329px] flex-shrink-0" />
          {/* Duplicate images for seamless loop */}
          <img src={Icon1SVG} alt="about image" className="w-[351px] md:w-[511.46px] h-[226px] md:h-[329px] flex-shrink-0" />
          <img src={Icon2SVG} alt="about image" className="w-[190px] md:w-[277.28px] h-[226px] md:h-[329px] flex-shrink-0" />
          <img src={Icon3SVG} alt="about image" className="w-[190px] md:w-[277.28px] h-[226px] md:h-[329px] flex-shrink-0" />
          <img src={Icon4SVG} alt="about image" className="w-[251px] md:w-[474.82px] h-[226px] md:h-[329px] flex-shrink-0" />
        </div>
      </div>
      {/* Mobile Carousel */}
      <div className="flex flex-row gap-2 md:gap-4 items-start justify-start 2xl:justify-center overflow-x-auto scrollbar-hide mt-[162px] md:mb-[80px] lg:hidden w-full max-w-[100vw]">
        <div
          ref={mobileCarouselRef}
          className="flex flex-row gap-2 md:gap-4 items-start justify-start overflow-x-auto scrollbar-hide scroll-smooth w-full"
          style={{ scrollBehavior: 'smooth' }}
        >
          <img src={Icon1SVG} alt="about image" className="w-[351px] h-[226px] flex-shrink-0" />
          <img src={Icon2SVG} alt="about image" className="w-[190px] h-[226px] flex-shrink-0" />
          <img src={Icon3SVG} alt="about image" className="w-[190px] h-[226px] flex-shrink-0" />
          <img src={Icon4SVG} alt="about image" className="w-[251px] h-[226px] flex-shrink-0" />
          {/* Duplicate images for seamless loop */}
          <img src={Icon1SVG} alt="about image" className="w-[351px] h-[226px] flex-shrink-0" />
          <img src={Icon2SVG} alt="about image" className="w-[190px] h-[226px] flex-shrink-0" />
          <img src={Icon3SVG} alt="about image" className="w-[190px] h-[226px] flex-shrink-0" />
          <img src={Icon4SVG} alt="about image" className="w-[251px] h-[226px] flex-shrink-0" />
        </div>
      </div>
    </>
  )
}

export default MediaCarousel
