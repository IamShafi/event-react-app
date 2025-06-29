import React from "react";

const TicketPricesCard = () => {
  return (
    <div
      className="TicketPricesCard-Container w-full max-w-[1200px] flex flex-row gap-3 justify-between px-2.5 lg:p-[40px]"
      style={{
        border: "1px solid",
        borderImage:
          "linear-gradient(to right, #FFFFFF 100%, #FFFFFF 0%, , #FFFFFF 0%, #FFFFFF 100%) 1",
        backgroundColor: "#0000004D",
      }}
    >
      {/* Ticket */}
      <div className="w-full max-w-[227px] lg:max-w-[380px] flex flex-col items-start">
          <h3 className="font-inter text-[14px] lg:text-[20px] font-[600] leading-[24px] text-white uppercase mb-10 lg:mb-[60px]">
            Ticket Type
          </h3>
          {/* Book1 */}
          <div className="flex flex-col gap-[14px] mb-6 lg:mb-[45px] w-full sm:w-[227px] lg:w-[324px]">
            <h3 className="font-inter text-[14px] lg:text-[20px] font-[600] leading-[24px] text-white">
              General Admission
            </h3>
            <p className="font-inter text-[12px] lg:text-[16px] font-[400] leading-[24px] text-white">
              Family — 2 Adults + 2 Kids
            </p>
            <p className="block lg:hidden font-inter text-[12px] lg:text-[16px] font-[400] leading-[24px] text-white">
              $25
            </p>
          </div>
          {/* Book2 */}
          <div className="flex flex-col gap-[14px] mb-6 lg:mb-[45px] w-full sm:w-[227px] lg:w-[324px]">
            <h3 className="font-inter text-[14px] lg:text-[20px] font-[600] leading-[24px] text-white">
              Early Bird (Limited)
            </h3>
            <p className="font-inter text-[12px] lg:text-[16px] font-[400] leading-[24px] text-white">
              Family — 3 Adults + 3 Kids
            </p>
            <p className="block lg:hidden font-inter text-[12px] lg:text-[16px] font-[400] leading-[24px] text-white">
              $15
            </p>
          </div>
          {/* Book3 */}
          <div className="flex flex-col gap-[14px] mb-6 lg:mb-0 w-full sm:w-[227px] lg:w-[324px]">
            <h3 className="font-inter text-[14px] lg:text-[20px] font-[600] leading-[24px] text-white">
              VIP Entry (Skip Line + 1 Drink)
            </h3>
            <p className="font-inter text-[12px] lg:text-[16px] font-[400] leading-[24px] text-white">
              Family — 4 Adults + 4 Kids
            </p>
            <p className="block lg:hidden font-inter text-[12px] lg:text-[16px] font-[400] leading-[24px] text-white">
              $45
            </p>
          </div>
        </div>
        {/* Price */}
        <div className="hidden lg:flex w-full max-w-[380px]  flex-col items-center gap-[71px]">
          <h3 className="font-inter text-[20px] font-[600] leading-[24px] text-white uppercase">
            Price
          </h3>
          <p className="font-inter text-[16px] font-[400] leading-[24px] text-white">
            $25
          </p>
          <p className="font-inter text-[16px] font-[400] leading-[24px] text-white">
            $15
          </p>
          <p className="font-inter text-[16px] font-[400] leading-[24px] text-white">
            $45
          </p>
        </div>
        {/* Book */}
        <div className="w-full max-w-[103px] lg:max-w-[350px] flex flex-col items-center">
          <h3 className="font-inter text-[14px] lg:text-[20px] font-[600] leading-[24px] text-white uppercase mb-10 md:mb-[54px]">
            Quantity
          </h3>
          {/* Buttons */}
          <div className="flex flex-col max-w-[390px]:gap-[110px] gap-[80px] lg:gap-[36px]">
            {/* 1st row */}
            <div className="flex items-center w-full max-w-[141px] h-[50px]">
              <button
                className="cursor-pointer h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px] text-white text-[12px] lg:text-[18px] font-[600] leading-[24px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                -
              </button>
              <button
                className="h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px] text-white text-[12px] lg:text-[18px] font-[600] leading-[24px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                1
              </button>
              <button
                className="cursor-pointer h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px] text-white text-[12px] lg:text-[18px] font-[600] leading-[24px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                +
              </button>
            </div>
            {/* 2nd row */}
            <div className="flex items-center w-full max-w-[141px] h-[50px]">
              <button
                className="cursor-pointer text-white text-[12px] lg:text-[18px] font-[600] leading-[24px] h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                -
              </button>
              <button
                className="text-white text-[12px] lg:text-[18px] font-[600] leading-[24px] h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                1
              </button>
              <button
                className="cursor-pointer text-white text-[12px] lg:text-[18px] font-[600] leading-[24px] h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                +
              </button>
            </div>
            {/* 3rd row */}
            <div className="flex items-center w-full max-w-[141px] h-[50px]">
              <button
                className="cursor-pointer text-white text-[12px] lg:text-[18px] font-[600] leading-[24px] h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                -
              </button>
              <button
                className="text-white text-[12px] lg:text-[18px] font-[600] leading-[24px] h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                1
              </button>
              <button
                className="cursor-pointer text-white text-[12px] lg:text-[18px] font-[600] leading-[24px] h-[28px] w-[26px] lg:w-[46px] lg:h-[50px] flex items-center justify-center px-2.5 lg:px-[18px] py-3 lg:py-[25px]"
                style={{
                  border: "1px solid",
                  backgroundColor: "#FFFFFF1A",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TicketPricesCard;
