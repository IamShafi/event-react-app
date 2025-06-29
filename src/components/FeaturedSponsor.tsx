import React from "react";
import sponsorBG from "../../public/image/sponsor-bg.svg";
import sponsorImage from "../../public/image/sponsor-image.svg";
import sponsorLogo from "../../public/image/sponsor-logo.svg";

const FeaturedSponsor = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative">
      <section
        className="w-full flex items-center justify-center h-[626px] lg:h-[506px] "
        style={{
          backgroundImage: `url(${sponsorBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-[46px] px-5 lg:px-[120px] py-12 lg:py-[70px]">
          {/* Text */}
          <div className="w-full max-w-[545px] flex flex-col  md:pl-[120px]">
            <p className="text-[14px] lg:text-[16px] font-inter font-[400] leading-[24px] text-white mb-5 md:mb-[25px]">Featured Sponsors</p>
            <h1 className="w-full max-w-[545px] text-[26px] lg:text-[42px] font-aeonik font-normal leading-[35px] lg:leading-[65px] text-white uppercase mb-5 md:mb-[25px]">
            Fueling the <br className=""/><span className="font-[700] font-aeonik"> Underground Energy</span>
            </h1>
            {/* Line */}
            <div
              className="w-[226px] h-[1px] mb-6 md:mb-[35px]"
              style={{
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%)",
              }}
            ></div>
            <p className="text-[14px] lg:text-[16px] font-inter font-[400] leading-[24px] text-white md:mb-[25px]">
            Red Bull proudly supports creative communities by powering events that bring music, art, and raw talent to life. Their commitment to bold experiences aligns perfectly with the pulse of Warehouse Rhythms.
            </p>

          </div>
          {/* Image */}
          <div className="relative w-[335px] lg:w-[594px] h-[278px] lg:h-[351px] border border-white">
            <img
              src={sponsorImage}
              alt=""
              className="w-[335px] lg:w-[594px] h-[278px] lg:h-[351px] mt-[15px] ml-[-15px]"
            />
            <img src={sponsorLogo} alt="" className="w-[427px] h-[248px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSponsor;
