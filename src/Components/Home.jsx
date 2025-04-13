import React from "react";
import FoodOption from "../Components/FoodOption";
import GrocaryGrid from "../Components/GrocaryGrid";
import DineOut from "../Components/DineOut";
import Header from "../Components/Header";
import Scan from "./Scan";

const Home = () => {
  return (
    <>
      <Header />
      <FoodOption />
      <GrocaryGrid />
      <DineOut />
      <Scan />
    </>
  );
};

export default Home;
