import { Link, useNavigate } from "react-router-dom";
import HeroImage from "../../../public/image/home-hero-bg-desktop.svg";
import MobileHeroImage from "../../../public/image/home-hero-bg-mobile.svg";
import { useState, useRef, useEffect } from "react";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileMenuOpen]);

  return (
    <div
      className="fixed top-0 z-50 sm:backdrop-blur-[44px] w-full h-[71px] md:h-[95px] mx-auto flex items-center justify-center"
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
      <div className="relative z-10 flex items-center w-full max-w-[1200px] justify-between gap-4 px-[20px] md:px-0">
        <Link to="/">
          <img
            src="/logo/header-logo.svg"
            alt="logo"
            className="w-[82px] md:w-[112px] h-[43px] md:h-[59px]"
          />
        </Link>
        <div className="w-full max-w-[167px] md:max-w-[674px] flex items-center justify-between gap-[50px]">
          {/* links */}
          <div className="hidden md:flex w-full max-w-[283px] justify-between gap-[35px] items-center font-normal font-inter text-[14px] lg:text-[16px] text-white uppercase">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/organizers">Organizers</Link>
          </div>
          <div className="w-full max-w-[278px] flex-1 gap-[10px] flex items-center justify-end">
            {/* input */}
            <form
              className="hidden md:flex w-full h-[52px] items-center relative"
              style={{
                background: "#FFFFFF1A",
                backdropFilter: "blur(44px)",
                border: "1px solid",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(97.99deg, rgba(255, 255, 255, 0.8) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.8) 100.55%)",
              }}
            >
              <input
                type="email"
                placeholder="Search Events..."
                className=" flex-1 h-full pl-2 bg-transparent text-white placeholder:text-[#D1D1D1] font-inter text-[20px] outline-none border-none"
                required
              />
              <img
                src="/icons/search.svg"
                alt=""
                className="w-[35px] h-[35px] md:w-[54px] md:h-[50px] absolute right-0 cursor-pointer"
              />
            </form>
            {/* mobile search */}
            <img src="/icons/search.svg" alt="" className="block md:hidden w-[38px] h-[38px] md:w-[54px] md:h-[50px] cursor-pointer" />
            <img
              src="/icons/user.svg"
              alt=""
              className="w-[35px] h-[35px] md:w-[53px] md:h-[53px] cursor-pointer"
            />
            {/* mobile menu */}
            <img
              src="/image/menu-hamburger.svg"
              alt=""
              className="w-[35px] h-[35px] cursor-pointer block md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-[2px] sm:hidden" />
          {/* Drawer */}
          <div
            ref={menuRef}
            className="mobileMenu bg-black fixed top-0 right-0 z-50 h-full w-[90vw] max-w-[360px] shadow-lg flex flex-col p-6 gap-8 sm:hidden animate-slide-in"
            style={{ transition: 'transform 0.3s', }}
          >
            <div className="flex justify-between items-center mb-6">
              <img src="/logo/header-logo.svg" alt="logo" className="w-[82px] h-[43px]" />
              <button
                className="text-white text-3xl font-bold focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-white text-lg font-inter uppercase bg-black/80">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
              <Link to="/organizers" onClick={() => setMobileMenuOpen(false)}>Organizers</Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};
const HeroInfoOverlay = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative w-full max-w-[335px] lg:max-w-[1200px] flex flex-col lg:flex-row lg:items-center lg:justify-between mb-[60px] md:mb-[90px]">
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
                onClick={() => navigate('/events')}
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
const CoverSection = () => {
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
        <div className="w-full flex items-center justify-center mt-[476px] md:mt-[716px] mb-0 z-20">
          <HeroInfoOverlay />
        </div>
        {/* Navigations */}
        <div className="flex flex-col gap-[5px] absolute top-[40%] md:top-[50%] right-[3%] transform translate-y-1/2">
          <div className="bg-[#FFFFFF80] w-[7px] h-[28px] rounded-[23.11px]"></div>
          <div className="bg-[#FFFFFF80] w-[7px] h-[7px] rounded-full"></div>
          <div className="bg-[#FFFFFF80] w-[7px] h-[7px] rounded-full"></div>
          <div className="bg-[#FFFFFF80] w-[7px] h-[7px] rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default CoverSection;
