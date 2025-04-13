import React from "react";
import Resturents from "./Components/Resturents";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import ResturentsMenu from "./Components/ResturentsMenu";
import Search from "./Components/Search";
import SeconadaryHome from "./Components/SeconadaryHome";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<SeconadaryHome />}>
          <Route path="/Resturents" element={<Resturents />} />
          <Route path="/Resturents/Mumbai/:id" element={<ResturentsMenu />} />
          <Route path="/Resturents/Mumbai/:id/search" element={<Search />} />
        </Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// Proxy server "https://cors-anywhere.herokuapp.com/";
