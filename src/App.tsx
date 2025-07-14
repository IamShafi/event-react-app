
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingSuccessPage from "./pages/BookingSuccessPage";
import OrganizerPage from "./pages/OrganizerPage";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/booking-success",
    element: <BookingSuccessPage />,
  },
  {
    path: "/organizers",
    element: <OrganizerPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
