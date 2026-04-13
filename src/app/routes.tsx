import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { Store } from "./components/Store";
import { SOP } from "./components/SOP";
import { Profile } from "./components/Profile";
import { Calendar } from "./components/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <Dashboard />,
  },
  {
    path: "/app/profile",
    element: <Profile />,
  },
  {
    path: "/app/store",
    element: <Store />,
  },
  {
    path: "/app/sop",
    element: <SOP />,
  },
  {
    path: "/app/calendar",
    element: <Calendar />,
  },
]);
