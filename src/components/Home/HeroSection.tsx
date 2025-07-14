import { Link } from "react-router-dom";
import HeroImage from "../../../public/image/home-hero-bg-desktop.svg";
import MobileHeroImage from "../../../public/image/home-hero-bg-mobile.svg";
const Header = () => {
  return (
    <div
      className="fixed top-0 z-50 backdrop-blur-[44px] w-full h-[71px] md:h-[95px] mx-auto flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid",
        borderImage: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 20%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0.5) 80%,
            rgba(255, 255, 255, 0) 100%
          )`,
        borderImageSlice: 1,
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <Link to="/">
          <img
            src="/logo/header-logo.svg"
            alt="logo"
            className="w-[82px] md:w-[112px] h-[43px] md:h-[59px]"
          />
        </Link>
      </div>
    </div>
  );
};
const HeroInfoOverlay = () => {
  return (
    <div className="relative w-full max-w-[335px] lg:max-w-[1200px] flex flex-col lg:flex-row lg:items-center lg:justify-between mb-[60px]">
      {/* Heading */}
      <div className="flex flex-col mb-[20px]">
        <div className="flex items-center gap-[4px]">
          <h1 className="font-aeonik font-[400] text-[38px] lg:text-[64px] leading-[43px] lg:leading-[65px] text-white uppercase">
            Experience
          </h1>
          <img
            src="/logo/whatzzon-logo.svg"
            alt=""
            className="hidden md:block w-[45px] h-[37px]"
          />
        </div>
        <h1 className="font-aeonik text-[38px] lg:text-[64px] leading-[43px] lg:leading-[65px] text-white uppercase font-[900]">
          the Unexpected.
        </h1>
      </div>
      {/* Line Break */}
      <div className="w-[106px] h-[1px] bg-white mb-[25px] block lg:hidden" />
      <div className="w-[1px] h-[87px] bg-white hidden lg:block" />
      {/* Description */}
      <div className="flex flex-col w-full md:max-w-[432px]">
        <p className="font-inter font-[400] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[26px] text-white pb-[30px] lg:pb-[25px]">
          Discover live events, immersive experiences, and cultural moments —
          all in one place.
        </p>
        {/* Button */}
        <div className="w-full lg:max-w-[336px] h-[54px] lg:h-[60px] bg-white p-[3px]">
          <div className="border border-black flex items-center justify-center w-full h-full cursor-pointer text-black font-inter text-[18px] font-[600] uppercase">
            <div className="flex items-center gap-[10px] py-[13px] lg:px-[28px] lg:py-[24px]">
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
    </div>
  );
};
const HeroSection = () => {
  return (
    <div className="w-full mx-auto relative">
      <Header />
      {/* Background Image */}
      {/* Hero Section with Background */}
      <section
        className="relative w-full flex items-center justify-center h-[645px] md:h-[746px]"
        style={{
          backgroundImage: `url('${MobileHeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url('${HeroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Noise Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle, #FFFFFF0F 1px, transparent 1px)`,
            backgroundSize: "2px 2px",
            opacity: 0.5,
          }}
        />
        {/* Black Linear Gradient Overlay bg-gradient-to-b from-black/0 via-black/10 to-black/40*/}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40"
        //   style={{
        //     background:
        //       "linear-gradient(360deg, #000000 16.61%, rgba(0, 0, 0, 0.6) 33.36%, rgba(0, 0, 0, 0) 51.94%)",
        //   }}
        ></div>
        {/* Content */}
        <div className="w-full flex items-center justify-center mt-[476px] md:mt-[716px] mb-10 md:mb-15 z-20">
          <HeroInfoOverlay />
        </div>
        {/* Navigations */}
        {/* <div className="flex flex-col gap-[5px] absolute top-[50%] right-[10%] transform translate-y-1/2">
          <div className="bg-[#FFFFFF80] w-[7px] h-[28px] rounded-[23.11px]"></div>
          <div className="bg-[#FFFFFF80] w-[7px] h-[7px] rounded-full"></div>
          <div className="bg-[#FFFFFF80] w-[7px] h-[7px] rounded-full"></div>
          <div className="bg-[#FFFFFF80] w-[7px] h-[7px] rounded-full"></div>
        </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
