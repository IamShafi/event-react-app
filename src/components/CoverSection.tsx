
import HeroImage from "../../public/image/hero-bg.svg";
import MobileHeroImage from "../../public/image/hero-bg-mobile.svg";
import Header from "./Header";
import CoverInfoOverlay from "./CoverInfoOverlay";

const CoverSection = () => {
  return (
    <div className="w-full mx-auto relative">
      <Header />
      {/* Background Image */}
      {/* Hero Section with Background */}
      <section
        className="relative w-full flex items-center justify-center h-[419px] md:h-[400px]"
        style={{
          backgroundImage: `url('${MobileHeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url('${HeroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Noise Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle, #FFFFFF0F 1px, transparent 1px)`,
            backgroundSize: "2px 2px",
            opacity: 0.5,
          }}
        />
        {/* Black Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40"></div>
        {/* Content */}
        <div className="w-full flex items-center justify-center mt-[476px] mb-10 md:mb-15 z-20">
          <CoverInfoOverlay />
        </div>
      </section>
    </div>
  );
};

export default CoverSection;
