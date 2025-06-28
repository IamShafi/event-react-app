import React from "react";
import VenueImage from "../../public/image/venue-concert.svg";
import MoobileVenueImage from "../../public/image/mobile-venue-concert.svg";
import CorrectIcon from "../../public/logo/correct-icon.svg";

const info = [
  "Restrooms available",
  "18+ event — ID required at the door",
  "Entry opens 30 minutes before start",
  "Restrooms available",
];
const MoreInfoCardVenue = () => {
  return (
    <div
      className="w-full max-w-[385px] h-[225px]"
      style={{
        border: "1px solid",
        borderImage: "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%) 1",
        backgroundColor: "#FFFFFF1A",
      }}
    >
      <div className="w-full flex flex-col items-start gap-[25px] px-[25px] py-[25px]">
        <div className="flex flex-col gap-[25px] items-start">
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[4px] bg-white w-[20px] h-[20px] flex items-center justify-center">
              <img
                src={CorrectIcon}
                aria-label="correct icon"
                className="w-[8.5px] h-[5.66px]"
              />
            </div>
            <h3 className="font-inter text-[16px] font-[600] leading-[24px] text-white">
              {info[0]}
            </h3>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[4px] bg-white w-[20px] h-[20px] flex items-center justify-center">
              <img
                src={CorrectIcon}
                aria-label="correct icon"
                className="w-[8.5px] h-[5.66px]"
              />
            </div>
            <h3 className="font-inter text-[16px] font-[600] leading-[24px] text-white">
              {info[1]}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-[25px] items-start">
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[4px] bg-white w-[20px] h-[20px] flex items-center justify-center">
              <img
                src={CorrectIcon}
                aria-label="correct icon"
                className="w-[8.5px] h-[5.66px]"
              />
            </div>
            <h3 className="font-inter text-[16px] font-[600] leading-[24px] text-white">
              {info[2]}
            </h3>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[4px] bg-white w-[20px] h-[20px] flex items-center justify-center">
              <img
                src={CorrectIcon}
                aria-label="correct icon"
                className="w-[8.5px] h-[5.66px]"
              />
            </div>
            <h3 className="font-inter text-[16px] font-[600] leading-[24px] text-white">
              {info[3]}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Venue = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center">
      <section
        className="relative w-full"
        style={{
          backgroundColor: "#000000B2",
        }}
      >
        {/* Mobile Background image with opacity */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url('${MoobileVenueImage}')`,
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
            backgroundImage: `url('${VenueImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
            height: "394px",
          }}
        />
        
        {/* Content overlay */}
        <div className="relative z-10 w-full flex flex-col md:flex-row gap-5 justify-between md:items-center md:gap-[245px] mx-5 my-12 md:my-[40px] md:pr-[145px]">
          <div className="w-full max-w-[577px] flex flex-col  md:pl-[120px]">
            <h1 className="text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-5 md:mb-[25px]">
              ABOUT <span className="font-[700] font-aeonik">THE VENUE</span>
            </h1>
            {/* Line */}
            <div
              className="w-[226px] h-[1px] mb-6 md:mb-[35px]"
              style={{
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%)",
              }}
            ></div>
            <p className="text-[16px] font-inter font-[400] leading-[24px] text-white mb-6 md:mb-[25px]">
              Tucked away in the heart of LA's Warehouse District, The Loft LA
              is a raw, industrial space known for its immersive underground
              events. With exposed brick walls, atmospheric lighting, and an
              open layout, it creates the perfect backdrop for deep house sets
              and high-energy crowds.
            </p>
            <p className="text-[16px] font-inter font-[400] leading-[24px] text-white md:mb-[35px]">
              Equipped with state-of-the-art sound and visual systems, the venue
              transforms every event into a multi-sensory experience.
            </p>
          </div>
          <MoreInfoCardVenue />
        </div>
      </section>
    </div>
  );
};

export default Venue;
