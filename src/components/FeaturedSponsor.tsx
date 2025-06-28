import React from "react";
import sponsorBG from "../../public/image/sponsor-bg.svg";
import sponsorImage from "../../public/image/sponsor-image.svg";
import sponsorLogo from "../../public/image/sponsor-logo.svg";

const FeaturedSponsor = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative">
      <section
        className="w-full flex items-center justify-center "
        style={{
          backgroundImage: `url(${sponsorBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "506px",
        }}
      >
        <div className="w-full flex items-center justify-between gap-[46px] px-[120px] py-[70px]">
          <div className="w-full max-w-[545px] flex flex-col  md:pl-[120px]">
            <p className="text-[16px] font-inter font-[400] leading-[24px] text-white md:mb-[25px]">Featured Sponsors</p>
            <h1 className="w-full max-w-[545px] text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase md:mb-[25px]">
            Fueling the <br className=""/><span className="font-[700] font-aeonik"> Underground Energy</span>
            </h1>
            {/* Line */}
            <div
              className="w-[226px] h-[1px] md:mb-[35px]"
              style={{
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%)",
              }}
            ></div>
            <p className="text-[16px] font-inter font-[400] leading-[24px] text-white md:mb-[25px]">
            Red Bull proudly supports creative communities by powering events that bring music, art, and raw talent to life. Their commitment to bold experiences aligns perfectly with the pulse of Warehouse Rhythms.
            </p>

          </div>
          <div className="relative w-[594px] h-[351px] border border-white">
            <img
              src={sponsorImage}
              alt=""
              className=" w-[594px] h-[351px] mt-[15px] mr-[15px]"
            />
            <img src={sponsorLogo} alt="" className="w-[427px] h-[248px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSponsor;
