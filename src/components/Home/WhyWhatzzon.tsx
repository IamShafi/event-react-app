import Card1 from "../../../public/image/hero-whywhatzzon-card-1.svg";
import Card2 from "../../../public/image/hero-whywhatzzon-card-2.svg";
import Card3 from "../../../public/image/hero-whywhatzzon-card-3.svg";
import Card4 from "../../../public/image/hero-whywhatzzon-card-4.svg";
import Card5 from "../../../public/image/hero-whywhatzzon-card-5.svg";
import Card6 from "../../../public/image/hero-whywhatzzon-card-6.svg";
import Card7 from "../../../public/image/hero-whywhatzzon-card-7.svg";
import Card8 from "../../../public/image/hero-whywhatzzon-card-8.svg";
import DesktopImage from "../../../public/image/hero-whywhatzzon-bg.svg";
import MobileImage from "../../../public/image/hero-whywhatzzon-bg-mobile.svg";
import { useNavigate } from "react-router-dom";

const WhyWhatzzon = () => {
  const navigate = useNavigate();
  const DesktopCards = [Card1, Card2, Card3, Card4];
  const MobileCards = [Card5, Card6, Card7, Card8];
  return (
    <div
      className="mt-[100px] w-full max-w-[1440px] mx-auto flex items-center justify-center lg:border-t"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.4) 70%, rgba(255, 255, 255, 0) 100%)",
        borderImageSlice: 1,
      }}
    >
      <section
        className="relative w-full "
        style={{
          backgroundColor: "#000000B2",
        }}
      >
        {/* Mobile Background image with opacity */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            backgroundImage: `url('${MobileImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Desktop Background image with opacity */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: `url('${DesktopImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "787px",
          }}
        />
        {/* Content overlay */}
        <div className="relative z-10 w-full max-w-[1200] flex flex-col items-center justify-center px-[20px] md:px-0  py-[50px] md:py-[60px]">
          <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-[30px] lg:mb-[50px]">
            WHY <span className="font-[700] font-aeonik">WHATZZON?</span>
          </h1>
          <div
            className={`w-full flex flex-wrap items-center justify-center gap-[15px] lg:gap-[20px]`}
          >
            {DesktopCards.map((card, index) => {
              return (
                <div key={index} className="hidden sm:block">
                  <img
                    src={card}
                    alt="icon"
                    className="w-[335px] sm:w-[285px] h-[350px] sm:h-[438px]"
                  />
                </div>
              );
            })}
            {MobileCards.map((card, index) => {
              return (
                <div key={index} className="block sm:hidden">
                  <img
                    src={card}
                    alt="icon"
                    className="w-[335px] sm:w-[285px] h-[350px] sm:h-[438px]"
                  />
                </div>
              );
            })}
          </div>
          {/* Button */}
          <div className="mt-[30px] sm:mt-[53px] w-full [@media(min-width:390px)]:max-w-[230px] h-[54px] bg-white p-[3px]">
            <div className="border border-black flex items-center justify-center w-full h-full cursor-pointer text-black font-inter text-[18px] font-[600] uppercase">
              <div className="flex items-center gap-[10px] py-[13px] lg:py-[24px] group">
                <img
                  src="/logo/arrow-right.svg"
                  alt=""
                  className="w-[25px] h-[12px]
                  group-hover:order-2
                  group-hover:translate-x-[0px] group-hover:ml-0
                  order-1"
                  style={{ willChange: "transform" }}
                />
                <button
                  className="font-inter leading-[16px] lg:leading-[26px]  text-[12px] lg:text-[16px] font-[800] uppercase 
                  bg-transparent border-none outline-none cursor-pointer
                  transition-all duration-500
                  group-hover:order-1
                  group-hover:-translate-x-[5px]
                  order-2"
                  style={{ willChange: "transform" }}
                  onClick={() => navigate("/events")}
                >
                  EXPLORE EVENTS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWhatzzon;
