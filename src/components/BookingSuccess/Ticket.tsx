import React from "react";
import TicketBG from "../../../public/image/book-ticket.png";
import TicketQR from "../../../public/image/ticket-qr.svg";
import emailIcon from "../../../public/logo/socials/email.svg";
import printIcon from "../../../public/logo/socials/print.svg";
import applepayIcon from "../../../public/logo/socials/apple.svg";
import gpayIcon from "../../../public/logo/socials/GPay.svg";

const Ticket = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto lg:px-[120px] lg:py-[100px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[50px] items-center justify-center">
        <div className="text-center flex items-center leading-[65px] text-white ">
          <span className="font-inter font-bold uppercase text-[26px] md:text-[42px] mr-2">
            Your ticket{" "}
          </span>
          <span className="font-inter font-normal text-[14px] lg:text-[16px]">
            has been emailed to you automatically.
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-[25px] w-full">
          {/* Ticket Section Image section */}
          <div
            className="relative w-full max-w-[811px] rounded-[16px] flex items-center justify-center p-0 overflow-hidden"
            style={{
              backgroundImage: `url(${TicketBG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "320px",
            }}
          >
            <div className="flex flex-row w-full h-full p-8">
              {/* Ticket Info (Left) */}
              <div className="flex-1 flex flex-col justify-center gap-2 text-left text-black">
                <div className="font-bold text-[26px] leading-[65px] mb-2">
                  WAREHOUSE RHYTHMS
                </div>
                <div className="font-inter font-normal text-[18px]">
                  Date & Time: July 27, 2025 · 9:00 PM
                </div>
                <div className="font-inter font-normal text-[18px]">Location: The Loft LA</div>
                <div className="font-inter font-normal text-[18px]">Ticket Type: VIP Entry</div>
                <div className="font-inter font-normal text-[18px]">Order ID: #WHZ12345678</div>
                <div className="font-inter font-normal text-[18px]">Name: Jane Doe</div>
                <div className="font-inter font-normal text-[18px]">Email: jane@email.com</div>
              </div>
              {/* QR Code (Right) */}
              <div className="flex flex-col items-center justify-center flex-shrink-0 w-[200px] ml-8">
                <img
                  src={TicketQR}
                  alt="Ticket QR"
                  className="w-[160px] h-[160px] object-contain"
                />
              </div>
            </div>
          </div>
          {/* Sent-to Section (Right) */}
          <div className="w-full max-w-[364px] flex flex-col gap-4 bg-white rounded-[16px] p-6 shadow-md font-inter">
            <button className="font-[900] text-[14px] lg:text-[16px] flex justify-center items-center gap-3 border border-[#E5E7EB] rounded-lg py-2 px-2 hover:bg-gray-50 transition">
              <img src={emailIcon} alt="Email" className="w-6 h-6" />
              <span className="font-[800] text-[16px]">SENT TO EMAIL</span>
            </button>
            <button className="font-[900] text-[14px] lg:text-[16px] flex justify-center items-center gap-3 border border-[#E5E7EB] rounded-lg py-2 px-2 hover:bg-gray-50 transition">
              <img src={printIcon} alt="Print" className="w-6 h-6" />
              <span className="font-[800] text-[16px]">PRINT TICKET</span>
            </button>
            <button className="font-[900] text-[14px] lg:text-[16px] flex items-center gap-3 border border-[#E5E7EB] rounded-lg py-2 px-2 hover:bg-gray-50 transition">
              <div className="w-[80px] h-[52px] bg-black flex items-center justify-center">
                <img src={applepayIcon} alt="Apple Pay" className="w-[55px] h-6" />
              </div>
              <span className="font-[800] text-[16px]">
                ADD TO APPLE WALLET
              </span>
            </button>
            <button className="font-[900] text-[14px] lg:text-[16px] flex items-center gap-2 border border-[#E5E7EB] rounded-lg py-2 px-2 hover:bg-gray-50 transition">
              <div className="w-[80px] h-[52px] bg-black flex items-center justify-center">
                <img src={gpayIcon} alt="Google Pay" className="w-[60px] h-6" />
              </div>

              <span className="font-[800] text-[16px]">
                ADD TO GOOGLE WALLET
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
