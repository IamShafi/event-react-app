
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="fixed top-0 z-50 backdrop-blur-[44px] w-full h-[71px] md:h-[95px] mx-auto flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid",
        borderImage: `linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.5) 20%,
          rgba(255, 255, 255, 0.5) 50%,
          rgba(255, 255, 255, 0.5) 80%,
          rgba(255, 255, 255, 0) 100%
        )`,
        borderImageSlice: 1,
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <Link to="/">
        <img
          src="/logo/header-logo.svg"
          alt="logo"
          className="w-[82px] md:w-[112px] h-[43px] md:h-[59px]"
        />
        </Link>
      </div>
    </div>
  );
};

export default Header;
