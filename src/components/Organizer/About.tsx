
import AboutImage from "../../../public/image/organizer-about-bg.svg";
import MobileVenueImage from "../../../public/image/organizer-about-bg-mobile.svg";
import RightAboutImage from "../../../public/image/organizer-about-image-desktop.svg";

const About = () => {
  return (
    <div className="mt-[100px] w-full max-w-[1440px] mx-auto flex items-center justify-center">
      <section
        className="relative w-full "
        style={{
          backgroundColor: "#000000B2",
        }}
      >
        {/* Mobile Background image with opacity */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            backgroundImage: `url('${MobileVenueImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
            height: "640px",
          }}
        />

        {/* Desktop Background image with opacity */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: `url('${AboutImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
            height: "442px",
          }}
        />

        {/* Content overlay */}
        <div
          className="w-full max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row justify-between px-5 md:px-0 relative z-10  gap-5 md:gap-0   
         lg:gap-10  mt-0 md:mt-[40px]"
        >
          <div className="w-full max-w-[335px] md:max-w-[505px] flex flex-col">
            <h1 className="text-[26px] md:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mb-5 md:mb-[25px]">
              ABOUT <span className="font-[700] font-aeonik">PULSE EVENT</span>
            </h1>
            {/* Line */}
            <div
              className="w-[226px] h-[1px] mb-6 md:mb-[35px]"
              style={{
                border: "1px solid",

                borderImageSource:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 35.1%)",
                borderImageSlice: 1,
              }}
            ></div>
            <p className="text-[14px] md:text-[16px] font-inter font-[400] leading-[20px] md:leading-[24px] mb-6 md:mb-[25px]" style={{ color: 'rgba(255,255,255,0.80)' }}>
              Pulse Events is a creative collective focused on bringing
              immersive concerts, cultural shows, and art-driven experiences to
              life. With a track record of hosting genre-defying acts and
              unforgettable nights, we believe in connecting people through
              sound, light, and shared moments.
            </p>
            <p className="text-[14px] md:text-[16px] font-inter font-[400] leading-[20px] md:leading-[24px] md:mb-[35px]" style={{ color: 'rgba(255,255,255,0.80)' }}>
              Whether it’s a rooftop jazz session or an underground electronic
              rave, Pulse curates each event to spark emotion and inspire
              community.
            </p>
          </div>
          <div className="w-[355px] h-[221px] lg:w-[643px] lg:h-[399px]">
            <img
              src={RightAboutImage}
              alt="about image"
              className="w-full h-full object-contain xl:object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
