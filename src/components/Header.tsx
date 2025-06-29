import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="fixed top-0 z-50 backdrop-blur-[44px] w-full h-[71px] md:h-[95px] mx-auto flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid",
        borderImage: "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 0%) 1",
      }}
    >
      {/* Background with blur and gradient */}
      {/* <div className='absolute inset-0  bg-[#0000001A] bg-opacity-10 backdrop-blur-[44px] bg-gradient-to-b from-white/0 to-white/0'></div> */}

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

export default Header;
