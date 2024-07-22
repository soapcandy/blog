import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import SubHeader from "../components/layouts/SubHeader";
import classes from "../styles/MainFrame.module.css";

function MainFrame() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.subContainer}>
        <SubHeader />
      </div>
      <div className={classes.contents}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainFrame;
