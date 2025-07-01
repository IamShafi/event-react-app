import React from "react";
import logo from "../../../public/logo/book-logo.png";

const CoverInfoOverlay = () => {
  return (
    <div
      className="w-full max-w-[335px] lg:max-w-[885px] h-[153px] lg:h-[196px] 
      flex flex-col items-center justify-center 
      lg:py-[40px] px-[10px]"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(97.99deg, rgba(255, 255, 255, 0.3) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.3) 100.55%)",
        borderImageSlice: 1,
        background: "#FFFFFF1A",
      }}
    >
      <div className="hidden lg:block">
        <h1 className="mb-[30px] text-center text-[38px] lg:text-[64px] font-aeonik font-[900] lg:font-medium leading-[43px] lg:leading-[65px] text-white uppercase">
          <span className="font-[900] font-aeonik">🎉 You're Booked!</span>
        </h1>
        <p
          className="w-full max-w-[692px] text-center text-[14px] md:text-[16px] text-white font-inter font-[400] leading-[20px] 
        lg:leading-[30px] uppercase "
        >
          Thanks for securing your spot at Warehouse Rhythms. Your ticket
          details are below — see you there!
        </p>
      </div>
      <div className="w-full max-w-[315px] flex lg:hidden flex-col items-center  mb-[50px] ml-[0px]">
        <div className="mb-[20px] w-[42px]">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="mb-[20px] text-center text-[36px] font-aeonik font-[900]  leading-[43px] text-white uppercase">
          <span className="font-[900] font-aeonik">You're Booked!</span>
        </h1>
        <p className="w-full max-w-[692px] text-center font-inter font-[400] text-[14px] leading-[20px] text-white uppercase ">
          Thanks for securing your spot at Warehouse Rhythms. Your ticket
          details are below — see you there!
        </p>
      </div>
    </div>
  );
};

export default CoverInfoOverlay;
