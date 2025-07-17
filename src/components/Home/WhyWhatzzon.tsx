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

// Card component for WhyWhatzzon section
const WhyWhatzzonCard = ({ img, title, description }: { img: string; title: string; description: string }) => (
  <div className="hidden sm:block relative">
    <img
      src={img}
      alt="icon"
      className="w-[335px] sm:w-[285px] h-[350px] sm:h-[438px]"
    />
    <div className="absolute top-[80%] left-[50%] translate-x-[-50%] w-[190px] flex flex-col text-center items-center">
      <h1 className="font-inter font-[700] text-[18px] leading-[28px] text-white">{title}</h1>
      <p className="font-inter font-[400] text-[14px] lg:text-[16px] leading-[22px] text-white">{description}</p>
    </div>
  </div>
);

const WhyWhatzzon = () => {
  const navigate = useNavigate();
  // Card data for Desktop
  const DesktopCardData = [
    {
      img: Card1,
      title: "Seamless Booking",
      description: "Buy tickets instantly, no hassle.",
    },
    {
      img: Card2,
      title: "Local Discoveries",
      description: "Find events happening around you — fast.",
    },
    {
      img: Card3,
      title: "Visual Previews",
      description: "Watch, scroll, feel the vibe before you book.",
    },
    {
      img: Card4,
      title: "Curated Schedules",
      description: "Stay ahead of what’s trending and what’s next.",
    },
  ];
  const MobileCardImages = [Card5, Card6, Card7, Card8];
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
            {DesktopCardData.map((card, index) => (
              <WhyWhatzzonCard
                key={"desktop-" + index}
                img={card.img}
                title={card.title}
                description={card.description}
              />
            ))}
            {DesktopCardData.map((card, index) => (
              <div key={"mobile-" + index} className="block sm:hidden relative">
                <img
                  src={MobileCardImages[index]}
                  alt="icon"
                  className="w-[335px] sm:w-[285px] h-[350px] sm:h-[438px]"
                />
                <div className="absolute top-[75%] left-[50%] translate-x-[-50%] w-[290px] flex flex-col text-center items-center">
                  <h1 className="font-inter font-[700] text-[18px] leading-[28px] text-white">{card.title}</h1>
                  <p className="font-inter font-[400] text-[14px] lg:text-[16px] leading-[22px] text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Button */}
          <div className="mt-[30px] sm:mt-[53px] w-full [@media(min-width:390px)]:max-w-[230px] h-[54px] bg-white p-[3px]">
            <div className="border border-black flex items-center justify-center w-full h-full cursor-pointer text-black font-inter text-[18px] font-[600] uppercase">
              <div className="w-full max-w-[226px] flex justify-center items-center gap-[10px] py-[13px] lg:py-[24px] group">
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
