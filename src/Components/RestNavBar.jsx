import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { IoSearchSharp, IoHelpBuoyOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { TbMichelinBibGourmand } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const RestNavBar = () => {
  const counter = useSelector((state) => state.cartSlice.count);

  return (
    <div className="w-[80%] mx-auto flex justify-between items-center py-3">
      {/* Restaurant Logo */}
      <img
        className="h-14 w-14 object-contain rounded-full border-2 border-white shadow-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzTlfM0HkY72Exh7YHwKmfaT_J5NkcPuOEo1zJb5vo0GBf631AusX2iIs3ZA_4v4mWsY&usqp=CAU"
        alt="Restaurant Logo"
      />

      {/* Location */}
      <div className="flex items-center gap-1 text-gray-700 text-lg">
        <span className="font-bold border-b-[3px] border-black">Other</span>
        <span className="text-sm">Premier Residencies, Kurla West, Mum...</span>
        <AiFillCaretDown className="text-[#ff5200] text-lg cursor-pointer" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {[
          { icon: <IoSearchSharp />, label: "Search" },
          { icon: <LuBadgePercent />, label: "Offers" },
          { icon: <IoHelpBuoyOutline />, label: "Help" },
          { icon: <TbMichelinBibGourmand />, label: "Sign In" },
        ].map((item, index) => (
          <p
            key={index}
            className="flex items-center gap-3 text-lg font-semibold hover:text-[#ff5200] transition-colors cursor-pointer"
          >
            {item.icon}
            {item.label}
          </p>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="/Checkout"
          className="text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1"
        >
          <FaShoppingCart className="text-2xl" />
          <span className="text-lg font-semibold">Cart ({counter})</span>
        </Link>
      </div>
    </div>
  );
};

export default RestNavBar;
