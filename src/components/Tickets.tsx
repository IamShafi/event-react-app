import React from "react";
import TicketBG from "../../public/image/ticket-bg.svg";
import TicketPricesCard from "./TicketPricesCard";
import ArrowRight from "../../public/logo/arrow-right.svg"
import { Link } from "react-router-dom";
const Tickets = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative">
      {/* Background Image */}
      {/* Hero Section with Background */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center px-[40px] lg:px-[80px] py-[50px] lg:py-[120px]"
        style={{
          backgroundImage: `url('${TicketBG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "768px",
        }}
      >
        {/* Content */}
        <h1 className=" text-center text-[26px] lg:text-[42px] font-aeonik font-normal leading-[35px] lg:leading-[65px] text-white uppercase md:mt-[80px] mb-[30px] md:mb-[50px]">
          GET YOUR {""}<br className="block lg:hidden"/><span className="font-[700] font-aeonik">TICKETS NOW</span>
        </h1>
        <TicketPricesCard />
        <div className="w-full max-w-[117px] lg:max-w-[184px] h-[38px] lg:h-[60px] bg-white p-[3px] mt-[30px] lg:mt-[50px] lg:mb-[80px]">
            <div className="border border-black flex items-center justify-center w-full h-full cursor-pointer text-black font-inter text-[18px] font-[600] uppercase">
                <div className="flex items-center gap-[10px] py-[13px] lg:px-[28px] lg:py-[24px]">
                    <img src={ArrowRight} alt="" className="w-[25px] h-[12px]"/>
                    <Link to="/booking-success"><p className="font-inter leading-[16px] lg:leading-[26px]  text-[12px] lg:text-[16px] font-[800] uppercase">Checkout</p></Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
