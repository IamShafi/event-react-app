import Footer from "../components/Footer";
import EarlyAccess from "../components/Home/EarlyAccess";
import HeroSection from "../components/Home/CoverSection";
import WhyWhatzzon from "../components/Home/WhyWhatzzon";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyWhatzzon />
      <EarlyAccess/>
      <Footer />
    </>
  );
};

export default HomePage;
