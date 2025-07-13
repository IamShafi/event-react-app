
import CoverSection from "../components/Organizer/CoverSection";
import HeroImage from "../../public/image/organizer_bg_desktop.svg";
import MobileHeroImage from "../../public/image/organizer_bg_mobile.svg";
import About from "../components/Organizer/About";
import ReachOut from "../components/Organizer/ReachOut";
import LiveEvents from "../components/Organizer/LiveEvents";

const OrganizerPage = () => {
  return (
    <div>
      <CoverSection
        mobileHeroImage={MobileHeroImage}
        desktopHeroImage={HeroImage}
        mobileHeight="h-[419px]"
        desktopHeight="md:h-[400px]"
        withNoiseOverlay={false}
        overlayPositionClass="mt-[444px] mb-10 md:mb-15"
      />
      <About />
      <ReachOut/>
      <LiveEvents/>
    </div>
  );
};

export default OrganizerPage;
