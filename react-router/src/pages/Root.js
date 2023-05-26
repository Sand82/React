import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

const Rootlayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Rootlayout;
