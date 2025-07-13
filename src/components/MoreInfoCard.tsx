
import CorrectIcon from "../../public/logo/correct-icon.svg";

const info = [
  "Restrooms available",
  "18+ event — ID required at the door",
  "Entry opens 30 minutes before start",
  "Restrooms available",
];
const MoreInfoCard = () => {
  return (
    <div
      className="w-full max-w-[577px] h-full"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(97.99deg, rgba(255, 255, 255, 0.3) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.3) 100.55%)",
        borderImageSlice: 1,
        background: "#FFFFFF1A",
      }}
    >
      <div className="w-full flex flex-col gap-[25px] px-[25px] py-[25px]">
        <div className="flex flex-col md:flex-row gap-[25px] items-start md:items-center">
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[4px] bg-white w-[20px] h-[20px] flex items-center justify-center">
              <img
                src={CorrectIcon}
                aria-label="correct icon"
                className="w-[8.5px] h-[5.66px]"
              />
            </div>
            <h3 className="font-inter text-[16px] font-[600] leading-[24px] text-white">
              {info[0]}
            </h3>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[4px] bg-white w-[20px] h-[20px] flex items-center justify-center">
              <img
                src={CorrectIcon}
                aria-label="correct icon"
                className="w-[8.5px] h-[5.66px]"
              />
            </div>
            <h3 className="font-inter text-[16px] font-[600] leading-[24px] text-white">
              {info[1]}
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[25px] items-start md:items-center">
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[4px] bg-white w-[20px] h-[20px] flex items-center justify-center">
              <img
                src={CorrectIcon}
                aria-label="correct icon"
                className="w-[8.5px] h-[5.66px]"
              />
            </div>
            <h3 className="font-inter text-[16px] font-[600] leading-[24px] text-white">
              {info[2]}
            </h3>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[4px] bg-white w-[20px] h-[20px] flex items-center justify-center">
              <img
                src={CorrectIcon}
                aria-label="correct icon"
                className="w-[8.5px] h-[5.66px]"
              />
            </div>
            <h3 className="font-inter text-[16px] font-[600] leading-[24px] text-white">
              {info[3]}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoCard;
