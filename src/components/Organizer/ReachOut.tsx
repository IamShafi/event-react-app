
import PhoneIcon from "../../../public/icons/phone.svg";
import EmailIcon from "../../../public/icons/email.svg";
import LocationIcon from "../../../public/icons/location.svg";

const ReachOut = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-[60px] lg:my-[100px] px-[20px] flex flex-col lg:flex-row items-center justify-between gap-[20px] lg:gap-[67px]">
      <div className="w-full max-w-[342px] md:max-w-[547px]">
        <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-[#FFFFFF] uppercase mb-[25px]">
          REACH OUT <span className="font-[700] font-aeonik">TO US</span>
        </h1>
        <p className="font-inter font-[400] text-[14px] lg:text-[16px]  leading-[20px] lg:leading-[24px] text-white mb-[25px] lg:mb-[45px]">
          We’d love to hear from you. Whether it’s a question, idea, or
          collaboration — drop us a message anytime.
        </p>
        {/* two cards */}
        <div className="w-full flex items-center gap-10 mb-[20px]">
          {/* card */}
          <div className="w-full max-w-[213px] flex items-center gap-[15px]">
            <img src={PhoneIcon} alt="icon" className="w-[50px] h-[50px]" />
            <div className="w-full flex flex-col gap-[13px]">
              <p className="font-inter font-[400] text-[14px]  leading-[100%] text-white uppercase">
                Phone number
              </p>
              <h1 className="font-inter font-[600] text-[16px]  leading-[100%] text-white">
                +1 (555) 123‑9876
              </h1>
            </div>
          </div>
          {/* card */}
          <div className="w-full max-w-[235px] flex items-center gap-[15px]">
            <img src={EmailIcon} alt="icon" className="w-[50px] h-[50px]" />
            <div className="w-full flex flex-col gap-[13px]">
              <p className="font-inter font-[400] text-[14px]  leading-[100%] text-white uppercase">
                Email us
              </p>
              <h1 className="font-inter font-[600] text-[16px]  leading-[100%] text-white">
                hello@whatzzon.com
              </h1>
            </div>
          </div>
        </div>
        {/* 1 card */}
        <div className="w-full max-w-[387px] flex items-center gap-[15px]">
          <img src={LocationIcon} alt="icon" className="w-[50px] h-[50px]" />
          <div className="w-full flex flex-col gap-[13px]">
            <p className="font-inter font-[400] text-[14px]  leading-[100%] text-white uppercase">
              Location
            </p>
            <h1 className="font-inter font-[600] text-[16px]  leading-[100%] text-white">
              21 Culture Row, Downtown LA, CA 90015
            </h1>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full max-w-[342px] md:max-w-[586px]"></div>
    </div>
  );
};

export default ReachOut;
