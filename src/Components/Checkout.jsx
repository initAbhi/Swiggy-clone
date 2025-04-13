import React from "react";
import { useSelector } from "react-redux";
import CheckOutCard from "./CheckOutCard";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdAssignmentInd } from "react-icons/md";

const Checkout = () => {
  const itemsList = useSelector((state) => state.cartSlice.items);

  return (
    <div>
      {/* Navbar */}
      <div className="w-full bg-[#ff5200] py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <img
            className="h-12 w-40"
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
            alt="Swiggy Logo"
          />

          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-white text-base font-bold">
            <p className="text-xl mr-10">Secure Checkout</p>
            <div className="flex gap-3">
              <p className="flex text-lg items-center">
                <IoHelpBuoyOutline />
                Help
              </p>
              <p className="flex text-lg items-center">
                <MdAssignmentInd />
                Sign
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Items */}
      <div className=" w-[80%] container mx-auto flex flex-wrap gap-6 py-8">
        {itemsList.map((value) => (
          <CheckOutCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
