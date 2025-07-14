import CoverSection from "../components/CoverSection";
import About from "../components/About";
import MediaCarousel from "../components/MediaCarousel";
import Organiser from "../components/Organiser";
import Venue from "../components/Venue";
import Schedule from "../components/Schedule";
import Tickets from "../components/Tickets";
import FeaturedSponsor from "../components/FeaturedSponsor";
import SponsorCarousel from "../components/SponsorCarousel";
import Footer from "../components/Footer";

const EventPage = () => {
  return (
    <>
      <CoverSection />
      <MediaCarousel />
      <About />
      <Organiser />
      <Venue />
      <Schedule />
      <Tickets />
      <FeaturedSponsor />
      <SponsorCarousel />
      <Footer />
    </>
  );
};

export default EventPage;
