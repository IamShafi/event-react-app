import React from "react";

const CoverInfoOverlay = () => {
  return (
    <div
      className="w-full max-w-[335px] md:max-w-[885px] flex flex-col items-center justify-center py-[24px] md:py-[28px] px-[15px] md:px-[30px]"
      style={{
        border: "1px solid",
        borderImage: "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%) 1",
        backgroundColor: "#FFFFFF1A",
      }}
    >
      <h1 className="text-center text-[38px] md:text-[64px] font-aeonik font-[900] md:font-medium leading-[43px] md:leading-[65px] text-white uppercase">
        <span className="font-[900] font-aeonik">🎉 You're Booked!</span>
      </h1>
      <p className="text-center text-[14px] md:text-[16px] text-white font-inter font-[400] leading-[20px] md:leading-[30px] uppercase my-[20px] md:my-[30px]">
        Thanks for securing your spot at Warehouse Rhythms. Your ticket details
        are below — see you there!
      </p>
    </div>
  );
};

export default CoverInfoOverlay;
