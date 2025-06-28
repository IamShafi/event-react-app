import React from 'react'
// import PlaySVG from "../../public/logo/Play.svg";
import Icon1SVG from "../../public/image/about-img-1.svg";
import Icon2SVG from "../../public/image/about-img-2.svg";
import Icon3SVG from "../../public/image/about-img-3.svg";
import Icon4SVG from "../../public/image/about-img-4.svg";
const MediaCarousel = () => {
  return (
    <div className="flex flex-row gap-4 items-start justify-start overflow-x-auto scrollbar-hide md:mt-[162px] md:mb-[80px]">
        <img
          src={Icon1SVG}
          alt="about image"
          className="w-[351px] md:w-[511.46px] h-[226px] md:h-[329px] flex-shrink-0"
        />
        <img
          src={Icon2SVG}
          alt="about image"
          className="w-[277.28px] h-[226px] md:h-[329px] flex-shrink-0"
        />
        <img
          src={Icon3SVG}
          alt="about image"
          className="w-[277.28px] h-[226px] md:h-[329px] flex-shrink-0"
        />
        <img
          src={Icon4SVG}
          alt="about image"
          className="w-[474.82px] h-[226px] md:h-[329px] flex-shrink-0"
        />
      </div>
  )
}

export default MediaCarousel
