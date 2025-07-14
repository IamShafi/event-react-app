import Card1 from "../../../public/image/hero-whywhatzzon-card-1.svg";
import Card2 from "../../../public/image/hero-whywhatzzon-card-2.svg";
import Card3 from "../../../public/image/hero-whywhatzzon-card-3.svg";
import Card4 from "../../../public/image/hero-whywhatzzon-card-4.svg";

const WhyWhatzzon = () => {
  const DesktopCards = [Card1, Card2, Card3, Card4];
  return (
    <div className="w-full max-w-[1200] flex flex-col items-center justify-center px-[20px] md:px-0  py-[80px] md:py-[50px]">
      <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-[30px] lg:mb-[50px]">
        WHY <span className="font-[700] font-aeonik">WHATZZON?</span>
      </h1>
      <div
        className={`w-full flex flex-wrap items-center justify-center gap-[15px] lg:gap-[20px]`}
      >
        {DesktopCards.map((card, index) => {
          return (
            <div
              key={index}
            >
              <img src={card} alt="icon" className="w-[335px] sm:w-[285px] h-[350px] sm:h-[438px]" />
            </div>
          );
        })}
      </div>
      {/* Button */}
      <div className="mt-[53px] w-full [@media(max-width:500px)]:max-w-[230px] h-[54px] bg-white p-[3px]">
        <div className="border border-black flex items-center justify-center w-full h-full cursor-pointer text-black font-inter text-[18px] font-[600] uppercase">
          <div className="flex items-center gap-[10px] py-[13px] lg:py-[24px]">
            <img
              src="/logo/arrow-right.svg"
              alt=""
              className="w-[25px] h-[12px]"
            />
            <button
              className="font-inter leading-[16px] lg:leading-[26px]  text-[12px] lg:text-[16px] font-[800] uppercase bg-transparent border-none outline-none cursor-pointer"
              onClick={() => {}}
            >
              EXPLORE EVENTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWhatzzon;
