import fbIcon from "../../public/logo/socials/fb.svg";
import instaIcon from "../../public/logo/socials/insta.svg";
import linkedinIcon from "../../public/logo/socials/linkedin.svg";
import ytIcon from "../../public/logo/socials/yt.svg";

const Footer = () => {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto px-5  pb-[30px] flex flex-col-reverse lg:flex-col items-center justify-center"
      style={{
        borderTop: "1px solid",
        borderImageSource:
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.4) 70%, rgba(255, 255, 255, 0) 100%)",
        borderImageSlice: 1,
      }}
    >
      <p className="text-center mt-6 block lg:hidden font-inter text-[14px] lg:text-[16px] font-[400] leading-[24px] text-white">
        Copyright © 2010-2025 Whatzzon. 
        <br /> All rights reserved.
      </p>
      {/* footer bottom 1*/}
      <div
        style={{
          borderBottom: "1px solid",
          borderImageSource:
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.4) 70%, rgba(255, 255, 255, 0) 100%)",
          borderImageSlice: 1,
        }}
        className="w-full max-w-[1193px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-[52px]  pt-[0px] lg:pt-[60px] lg:pb-[67px] pb-15"
      >
        <h1 className="font-aeonik font-[900] leading-[65px] text-[26px] lg:text-[42px] text-white uppercase">
          Follow Whatzzon
        </h1>
        {/* socials */}
        <div className="w-full max-w-[192px] flex gap-[5px] items-center">
          <div className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer">
            <img src={fbIcon} alt="" className="w-[12px] h-[22px]" />
          </div>
          <div className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer">
            <img src={instaIcon} alt="" className="w-[22px] h-[22px]" />
          </div>
          <div className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer">
            <img src={linkedinIcon} alt="" className="w-[18px] h-[17px]" />
          </div>
          <div className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer">
            <img src={ytIcon} alt="" className="w-[25px] h-[17px]" />
          </div>
        </div>
        {/* links */}
        <div className="w-full max-w-[202px] lg:max-w-[482px] flex justify-center flex-wrap gap-3 lg:gap-[30px] items-center font-normal font-inter text-[14px] lg:text-[16px] leading-[24px] text-white">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Explore Events</p>
          <p className="cursor-pointer">Contact Us</p>
          <p className="cursor-pointer">Organizers</p>
        </div>
      </div>
      {/* footer bottom 2*/}
      <div className="w-full max-w-[1193px] flex flex-col lg:flex-row gap-4 items-center justify-between lg:gap-[52px] lg:mt-[37px] mt-[50px]  mb-9 lg:mb-0">
        <p className="hidden lg:block font-inter text-[14px] md:text-[16px] font-[400] leading-[22px] md:leading-[24px] text-white">
          Copyright © 2010-2025 Whatzzon. All rights reserved.
        </p>
        <img
          src="/logo/header-logo.svg"
          alt=""
          className="w-[112px] h-[59px]"
        />
      </div>
    </div>
  );
};

export default Footer;
