
import PeopleConcertImage from "../../public/image/people-concert.png";
import MobilePeopleConcertImage from "../../public/image/mobile-people-concert.svg";
import DrumImage from "../../public/image/people-concert_drum.svg";
import locationIcon from "../../public/logo/location.svg";
const ScheduleCard = () => {
  const Schedule = [
    "9:00 PM – Doors Open",
    "9:30 PM – Opening Set: Kairo Beats",
    "11:00 PM – Live Visual Set by VJ Neo",
    "12:30 AM – Headliner: Deep Pulse",
    "2:00 AM – Event Ends",
  ];
  return (
    <div
      className="w-full max-w-[335px] lg:max-w-[480px] h-full p-4 lg:p-[25px]"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(97.99deg, rgba(255, 255, 255, 0.3) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.3) 100.55%)",
        borderImageSlice: 1,
        background: "#FFFFFF0A",
      }}
    >
      <ul className="flex flex-col gap-8 lg:gap-[52px] items-start relative">
        {/* Vertical line */}
        <div
          className="absolute left-[4px] top-[12px] bottom-[12px] w-[1px] bg-white"
          style={{ zIndex: 1 }}
        ></div>
        {Schedule.map((item, index) => (
          <li
            key={index}
            className="font-inter text-[14px] lg:text-[16px] font-[600] leading-[24px] text-white relative pl-[20px]"
            style={{ zIndex: 2 }}
          >
            {/* Custom bullet point */}
            <div
              className="absolute left-0 top-[8px] w-[8px] h-[8px] rounded-full bg-white"
              style={{ zIndex: 3 }}
            ></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const VenueCard = () => {
  return (
    <div
      className="w-full max-w-[335px] lg:max-w-[480px] h-[93px] p-4 lg:p-[25px] flex gap-[8px] items-center justify-between"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(97.99deg, rgba(255, 255, 255, 0.3) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.3) 100.55%)",
        borderImageSlice: 1,
        background: "#FFFFFF0A",
      }}
    >
      <img
        src={locationIcon}
        alt="location icon"
        className="w-[40px] h-[40px]"
      />
      <div className="flex flex-col gap-3 lg:gap-[18px] items-start">
        <h3 className="font-inter text-[14px] lg:text-[18px] font-[600] leading-[24px] text-white">
          The Loft LA
        </h3>
        <p className="font-inter text-[12px] lg:text-[16px] font-[400] leading-[24px] text-white">
          45 Warehouse District Rd, Los Angeles, CA 90012
        </p>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <section className="relative w-full">
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url('${MobilePeopleConcertImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "807px",
          }}
        ></div>
        
        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url('${PeopleConcertImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "755px",
          }}
        ></div>
        
        {/* Gradient Overlay */}
        {/* <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)",
            height: "685px",
            zIndex: 1,
          }}
        ></div> */}
        {/* Content */}
        <div className="px-5 relative z-10 w-full flex flex-col gap-7 lg:gap-[50px] items-center justify-center ">
          <h1 className="text-[26px] lg:text-[42px] font-aeonik font-normal leading-[65px] text-white uppercase mt-[50px] lg:mt-[80px]">
            Event <span className="font-[700] font-aeonik">SCHEDULE</span>
          </h1>
          <div className="w-full max-w-[1200px] flex flex-col xl:flex-row gap-5 items-center justify-between pb-[80px]">
            <div className="flex flex-col gap-[20px]">
              <ScheduleCard />
              <VenueCard />
            </div>
            <img src={DrumImage} alt="drum" className="w-[335px] lg:w-[690px] h-[208px] lg:h-[446px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
