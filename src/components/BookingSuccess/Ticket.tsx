import React from "react";

const Ticket = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto lg:px-[120px] lg:py-[100px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[50px] items-center justify-center">
        <h1 className="text-center text-[26px] md:text-[42px] font-aeonik font-[800] md:font-medium leading-[65px] text-white uppercase">
          Your ticket{" "}
          <span className="font-[400] text-[14px]lg:text-[16px]">
            has been emailed to you automatically.
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-[] lg:gap-[25px]">
          <div className="w-full max-w-[811px]"></div>
          <div className="w-full max-w-[364px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
