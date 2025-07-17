import Card1 from "../../../public/image/organizer_liveevent-card-1.svg";
import Card2 from "../../../public/image/organizer_liveevent-card-2.svg";
import Card3 from "../../../public/image/organizer_liveevent-card-3.svg";
import { useState } from "react";

const PastEventCard = ({ cardImage }: { cardImage: string }) => {
  return (
    <div
      className="group w-full max-w-[335px] md:max-w-[386px] min-h-[427px] md:min-h-[485px]"
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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-150"
        />
      </div>
      <div className="bg-[#FFFFFF1F] backdrop-blur-[44px] px-[20px] md:px-[25px] pt-[20px] md:pt-[25px] relative">
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
        <p
          className="font-inter font-[400] text-[14px] md:text-[16px] leading-[24px] text-white pb-[25px]"
          style={{ color: "rgba(255,255,255,0.80)" }}
        >
          A late-night DJ-led journey through beats, visuals, and underground
          vibes.
        </p>
      </div>
    </div>
  );
};

const PastEvents = () => {
  const cardImages = [Card1, Card2, Card3, Card1, Card2, Card3];
  const [startIndex, setStartIndex] = useState(0);
  const [showMoreMobile, setShowMoreMobile] = useState(false);
  // Helper to get 3 visible cards, wrapping around
  const getVisibleCards = () => {
    const visible = [0, 1, 2].map(
      (offset) => cardImages[(startIndex + offset) % cardImages.length]
    );

    if (
      typeof window !== "undefined" &&
      window.innerWidth < 768 &&
      showMoreMobile
    ) {
      // For mobile, show 3 more
      const nextSet = [3, 4, 5].map((i) => cardImages[i]);
      return visible.concat(nextSet);
    }

    return visible;
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + cardImages.length) % cardImages.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % cardImages.length);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <section className="relative w-full flex items-center justify-center bg-black">
        {/* Content overlay */}
        <div
          className="w-full max-w-[1200px] flex flex-col items-center justify-center relative z-10 pt-[0px] md:pt-[80px]"
        >
          <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-[30px] md:mb-[50px]">
            PAST <span className="font-[700] font-aeonik">EVENTS</span>
          </h1>
          <div className="CardContainer relative w-full max-w-[1200px] flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-[44px] md:gap-[20px] pb-[60px] md:pb-[80px]">
            {getVisibleCards().map((img, index) => (
              <PastEventCard key={index} cardImage={img} />
            ))}
            {/* Load More on Mobile */}
            {!showMoreMobile && (
              <div
                className="mt-[-14px] cursor-pointer flex md:hidden font-inter font-[800] text-[16px] text-white uppercase items-center gap-2"
                onClick={() => setShowMoreMobile(true)}
              >
                Load More
                <img
                  src="/icons/arrow-down.svg"
                  alt=""
                  className="w-[12px] h-[6px]"
                />
              </div>
            )}

            {/* Desktop Arrows */}
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

export default PastEvents;
