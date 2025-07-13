

const CoverInfoOverlay = () => {
  return (
    <div
      className="w-full max-w-[335px] md:max-w-[855px] flex flex-col items-center justify-center py-[24px] md:py-[28px] px-[15px] md:px-[30px]"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(97.99deg, rgba(255, 255, 255, 0.3) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.3) 100.55%)",
        borderImageSlice: 1,
        background: "#FFFFFF1A",
      }}
    >
      <h1 className="text-center text-[38px] md:text-[64px] font-aeonik font-[900] md:font-medium leading-[43px] md:leading-[65px] text-white uppercase">
        Your Night <br className="block lg:hidden" />
        <span className="font-[900] font-aeonik">Starts Here</span>
      </h1>
      <p className="text-center text-[14px] md:text-[16px] text-white font-inter font-[400] leading-[20px] md:leading-[30px] uppercase my-[20px] md:my-[30px]">
        A journey to the wonderful world of fiction
      </p>
      <p className="text-[14px] text-white font-inter font-medium">
        <span className="font-[700]">25th - 27th JULY 9AM - 5PM</span> The Loft
        LA <br className="block md:hidden" />— Book your spot before it sells
        out.
      </p>
    </div>
  );
};

export default CoverInfoOverlay;
