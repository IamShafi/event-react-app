import DesktopImage from "../../../public/image/organizer-bg-live-events-desktop.svg";
import MobileImage from "../../../public/image/organizer-bg-live-events-mobile.svg";
import Card1 from "../../../public/image/organizer_liveevent-card-1.svg";
import Card2 from "../../../public/image/organizer_liveevent-card-2.svg";
import Card3 from "../../../public/image/organizer_liveevent-card-3.svg";
import { useState } from "react";

const LiveEventCard = ({ cardImage }: { cardImage: string }) => {
  return (
    <div
      className="group w-full max-w-[335px] md:max-w-[386px] min-h-[486px] md:min-h-[540px]"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(157.05deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 45.27%, rgba(255, 255, 255, 0.5) 100%)",
        borderImageSlice: 1,
      }}
    >
      <div className="overflow-hidden w-[335px] md:w-[386px] h-[232px] md:h-[273px]">
        <img
          src={cardImage}
          alt="card"
          className="w-full h-full object-cover transition-trasnform duration-500 group-hover:scale-150"
        />
      </div>
      <div className="bg-[#00000059] backdrop-blur-[44px] px-[20px] md:px-[25px] pt-[20px] md:pt-[25px] relative">
        <h1 className="font-inter font-[700] text-[16px] md:text-[18px] text-white uppercase mb-[25px]">
          Warehouse Rhythms
        </h1>
        <div className="w-full flex items-center gap-[30px] mb-[16px]">
          <div className="w-full max-w-[129px] gap-[6px] flex items-center text-white">
            <img
              src="/icons/event-location.svg"
              alt=""
              className="w-[21px] h-[21px]"
            ></img>
            <p className="font-inter font-[700] text-[14px] md:text-[16px]">
              The Loft LA
            </p>
          </div>
          <div className="w-full max-w-[95px] gap-[6px] flex items-center text-white">
            <img
              src="/icons/event-clock.svg"
              alt=""
              className="w-[21px] h-[21px]"
            ></img>
            <p className="font-inter font-[700] text-[14px] md:text-[16px]">
              9:00 Pm
            </p>
          </div>
        </div>
        <div className="w-full max-w-[137px] gap-[6px] flex items-center mb-[30px] text-white">
          <img
            src="/icons/event-calendar.svg"
            alt=""
            className="w-[21px] h-[21px]"
          ></img>
          <p className="font-inter font-[700] text-[14px] md:text-[16px]">
            July 27, 2025
          </p>
        </div>
        <p className="font-inter font-[400] text-[14px] md:text-[16px] leading-[24px] text-white pb-[46px]">
          A late-night DJ-led journey through beats, visuals, and underground
          vibes.
        </p>
        {/* Button */}
        <div className="absolute left-[6%] bottom-[-30px] w-full max-w-[295px] lg:max-w-[336px] h-[38px] lg:h-[60px] bg-white p-[3px]">
          <div className="border border-black flex items-center justify-center w-full h-full cursor-pointer text-black font-inter text-[18px] font-[600] uppercase">
            <div className="flex items-center gap-[10px] py-[13px] lg:px-[28px] lg:py-[24px] group">
              <img
                src="/logo/arrow-right.svg"
                alt=""
                className="
                  w-[25px] h-[12px]
                  transition-all duration-500
                  group-hover:order-2
                  group-hover:translate-x-[0px] group-hover:ml-0
                  order-1
                "
                style={{ willChange: 'transform' }}
              />
              <button
                className="
                  font-inter leading-[16px] lg:leading-[26px] text-[12px] lg:text-[16px] font-[800] uppercase
                  bg-transparent border-none outline-none cursor-pointer
                  transition-all duration-500
                  group-hover:order-1
                  group-hover:-translate-x-[5px]
                  order-2
                "
                onClick={() => {}}
                style={{ willChange: 'transform' }}
              >
                BUY TICKETS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveEvents = () => {
  const cardImages = [Card1, Card2, Card3];
  const [startIndex, setStartIndex] = useState(0);

  // Helper to get 3 visible cards, wrapping around
  const getVisibleCards = () => {
    return [0, 1, 2].map(
      (offset) => cardImages[(startIndex + offset) % cardImages.length]
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + cardImages.length) % cardImages.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % cardImages.length);
  };

  return (
    <div className="mt-[50px] md:mt-[80px] w-full max-w-[1440px] mx-auto">
      <section
        className="relative w-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.85) 10.72%, rgba(0, 0, 0, 0.23) 65.03%, rgba(0, 0, 0, 0.79) 100%)",
        }}
      >
        {/* Mobile Background image  */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url('${MobileImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "640px",
          }}
        ></div>
        {/* Desktop Background image with opacity */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: `url('${DesktopImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "784px",
          }}
        ></div>
        {/* Content overlay */}
        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center relative z-10 py-[50px] md:py-[80px]">
          <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-[30px] md:mb-[50px]">
            LIVE <span className="font-[700] font-aeonik">EVENTS</span>
          </h1>
          <div className="CardContainer relative w-full max-w-[1200px] flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-[44px] lg:gap-[20px] pb-[50px] md:pb-[80px]">
            {getVisibleCards().map((img, index) => (
              <LiveEventCard key={index} cardImage={img} />
            ))}
            {/* Load More */}
            <div className="cursor-pointer flex md:hidden font-inter font-[800] text-[16px] text-white uppercase items-center gap-2">
              Load More{" "}
              <img
                src="/icons/arrow-down.svg"
                alt=""
                className="w-[12px] h-[6px]"
              />
            </div>
            {/* Arrows */}
            <div
              className="absolute left-[-6%] top-[50%] hidden lg:block cursor-pointer"
              onClick={handlePrev}
            >
              <img
                src="/icons/event-left-arrow.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </div>
            <div
              className="absolute right-[-6%] top-[50%] hidden lg:block cursor-pointer"
              onClick={handleNext}
            >
              <img
                src="/icons/event-right-arrow.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveEvents;
