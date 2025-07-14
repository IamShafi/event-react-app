import DesktopImage from "../../../public/image/early-access-bg-desktop.svg";
import MobileImage from "../../../public/image/early-access-bg-mobile.svg";

const EarlyAccess = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center">
      <section
        className="relative w-full flex items-center justify-center h-full"
        style={{
          backgroundColor: "#000000B2",
        }}
      >
        {/* Mobile Background image with opacity */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            backgroundImage: `url('${MobileImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
        <div className="relative z-10 w-full max-w-[1200px] flex items-center justify-between gap-[20px] my-[106px]">
          <div className="flex flex-col w-full max-w-[470px]">
            <div className="flex items-center gap-[35px] mb-[30px]">
              <div className="w-[35px] h-[1px] bg-white" />
              <p className="font-inter text-[14px] leading-[20px] text-white ">
                Get Notified First
              </p>
            </div>
            <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-[30px] lg:mb-[35px]">
              Be the{" "}
              <span className="font-[700] font-aeonik">First to Know</span>
            </h1>
            <p className="font-inter font-[400] text-[16px] leading-[24px] text-white lg:pb-[40px]">
              WHATZZON is currently invite-only. Drop your email below and we’ll
              let you in when the doors open.
            </p>
          </div>
          <div className="flex-1 w-full"></div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;
