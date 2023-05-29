import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const EventsRootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;
