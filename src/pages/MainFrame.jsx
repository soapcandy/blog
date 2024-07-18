import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import SubHeader from "../components/layouts/SubHeader";
import "../styles/MainFrame.css";

function MainFrame() {
  return (
    <div className="container">
      <Header />
      <SubHeader />
      <div className="contents">
        <Outlet />
      </div>
    </div>
  );
}

export default MainFrame;
