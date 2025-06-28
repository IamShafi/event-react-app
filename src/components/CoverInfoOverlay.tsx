import React from "react";

const CoverInfoOverlay = () => {
  return (
    <div className="w-full max-w-[855px] flex flex-col items-center justify-center py-[28px] px-[30px]" style={{ border: '1px solid', borderImage: 'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%) 1', backgroundColor: '#FFFFFF1A' }}>
      <h1 className="text-[64px] font-aeonik font-medium leading-[65px] text-white uppercase">
        Your Night <br className="block md:hidden"/><span className="font-[900] font-aeonik">Starts Here</span>
      </h1>
      <p className="text-[16px] text-white font-inter font-[400] leading-[30px] uppercase my-5 md:my-[30px]">A journey to the wonderful world of fiction</p>
      <p className="text-[14px] text-white font-inter font-medium"><span className="font-[700]">25th - 27th JULY 9AM - 5PM</span> The Loft LA <br className="block md:hidden"/>— Book your spot before it sells out.</p>
    </div>
  );
};

export default CoverInfoOverlay;
