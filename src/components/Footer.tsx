import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto pt-[60px] pb-[30px]"
      style={{
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderImage:
          "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%, #FFFFFF 100%, #FFFFFF 0%,) 1",
      }}
    >
      <div className="flex items-center mb-[67px]">
        <h1 className="font-aeonik font-[900] leading-[65px] text-[42px] text-white uppercase">
          Follow Whatzzon
        </h1>
        <div className="w-full max-w-[192px] flex gap-[] items-center"></div>
        <div className="w-full max-w-[482px] flex gap-[30px] items-center font-normal font-inter text-[16px] text-white">
          <p>Home</p>
          <p>Explore Events</p>
          <p>Contact Us</p>
          <p>Organizers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
