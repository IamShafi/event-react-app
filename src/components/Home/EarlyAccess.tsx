import DesktopImage from "../../../public/image/early-access-bg-desktop.svg";
import MobileImage from "../../../public/image/early-access-bg-mobile.svg";

const EarlyAccess = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center">
      <section
        className="relative w-full flex items-center justify-center pb-[460px] md:pb-[600px]"
        style={{
          backgroundColor: "#000000B2",
        }}
      >
        {/* Mobile Background image with opacity */}
        <div
          className="absolute inset-0 lg:hidden block"
          style={{
            backgroundImage: `url('${MobileImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "846px",
          }}
        />
        {/* Desktop Background image with opacity */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: `url('${DesktopImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "451px",
          }}
        />
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-[20px] px-[20px] md:px-0 mt-[50px] md:mt-[106px]">
          <div className="flex flex-col w-full max-w-[470px]">
            <div className="flex items-center gap-3 mb-[25px] md:mb-[30px]">
              <div className="w-[35px] h-[1px] bg-white" />
              <p className="font-inter text-[14px] leading-[20px] text-white ">
                Get Notified First
              </p>
            </div>
            <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-[25px] lg:mb-[35px]">
              Be the{" "}
              <span className="font-[700] font-aeonik">First to Know</span>
            </h1>
            <p className="font-inter font-[400] text-[16px] leading-[24px] text-white pb-[30px] lg:pb-[40px]">
              WHATZZON is currently invite-only. Drop your email below and we’ll
              let you in when the doors open.
            </p>
            {/* Input */}
            <form
              className="w-full h-[60px] flex items-center p-[5px]"
              style={{
                background: "#FFFFFF1A",
                backdropFilter: "blur(44px)",
                border: "1px solid",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(97.99deg, rgba(255, 255, 255, 0.8) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.8) 100.55%)",
              }}
            >
              <input
                type="email"
                placeholder="Enter Email Address..."
                className="flex-1 h-full pl-2 bg-transparent text-white placeholder:text-[#D1D1D1] font-inter text-[20px] outline-none border-none"
                required
              />
              <button
                type="submit"
                className="hidden sm:block cursor-pointer w-[198px] h-full bg-white text-black font-inter font-extrabold text-[16px] uppercase"
                style={{
                  borderTopRightRadius: 2,
                  borderBottomRightRadius: 2,
                }}
              >
                GET EARLY ACCESS
              </button>
            </form>
            {/* mobile */}
            <button
              type="submit"
              className="mt-[10px] sm:hidden flex cursor-pointer min-w-[335px] h-full py-[22px] items-center justify-center bg-white text-black font-inter font-extrabold text-[16px] uppercase"
              style={{
                borderTopRightRadius: 2,
                borderBottomRightRadius: 2,
              }}
            >
              GET EARLY ACCESS
            </button>
          </div>

          <div className="flex-1 w-full"></div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;
