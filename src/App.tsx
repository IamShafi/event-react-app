import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoverSection from "./components/CoverSection";
import About from "./components/About";
import MediaCarousel from "./components/MediaCarousel";
import Organiser from "./components/Organiser";
import Venue from "./components/Venue";
import Schedule from "./components/Schedule";
import Tickets from "./components/Tickets";
import FeaturedSponsor from "./components/FeaturedSponsor";
import SponsorCarousel from "./components/SponsorCarousel";
import Footer from "./components/Footer";
import BookingSuccessPage from "./pages/BookingSuccessPage";

const HomeLayout = () => {
  return (
    <div className="main">
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
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/booking-success",
    element: <BookingSuccessPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
