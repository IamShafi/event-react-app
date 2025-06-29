import React from "react";
import TicketBG from "../../../public/image/ticket-bg.svg"
import TicketQR from "../../../public/image/ticket-qr.svg"
import emailIcon from "../../../public/logo/socials/email.svg"
import printIcon from "../../../public/logo/socials/print.svg"
import applepayIcon from "../../../public/logo/socials/apple.svg"
import gpayIcon from "../../../public/logo/socials/GPay.svg"

const Ticket = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto lg:px-[120px] lg:py-[100px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[50px] items-center justify-center">
        <div className="text-center flex items-center leading-[65px] text-white ">
          <span className="font-inter font-bold uppercase text-[26px] md:text-[42px] mr-2">Your ticket {" "}</span>
          <span className="font-inter font-normal text-[14px] lg:text-[16px]">
            has been emailed to you automatically.
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-[] lg:gap-[25px]">
          {/* Image */}
          <div className="w-full max-w-[811px]"></div>
          {/* Send to */}
          <div className="w-full max-w-[364px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
