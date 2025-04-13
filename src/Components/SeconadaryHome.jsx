import React from "react";
import RestNavBar from "./RestNavBar";
import { Outlet } from "react-router";

const SeconadaryHome = () => {
  return (
    <div>
      <RestNavBar />
      <Outlet />
    </div>
  );
};

export default SeconadaryHome;
