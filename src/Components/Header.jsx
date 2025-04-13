import React from "react";
import { Link } from "react-router";
import { LuArrowUpRight } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-[#ff5200]  font-serif">
      <div className="flex items-center justify-between container mx-auto py-8">
        <img
          className="h-12 w-40"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
        />
        <div className="  text-white items-center text-base font-bold flex gap-15">
          <a target="_blank" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>
          <a
            className="flex items-center border-1 py-3 px-4 rounded-xl"
            href="#"
          >
            Get in App <LuArrowUpRight />
          </a>

          <a
            className="border-1 bg-black border-black py-3 px-4 rounded-2xl"
            href="#"
          >
            Sign in
          </a>
        </div>
      </div>

      <div className="py-16 pb-8 relative">
        <img
          className="h-110 w-60 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />
        <img
          className="h-110 w-60 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />
        <div className="text-5xl text-white font-bold max-w-[59%] text-center container mx-auto">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
        <div className="max-w-[62%] container mx-auto flex gap-5 mt-5">
          <input
            className="bg-white w-[40%] px-6 py-4 rounded-2xl"
            type="text"
            placeholder="Mumbai, India"
          />
          <input
            className="bg-white w-[55%] px-6 py-4 rounded-2xl"
            type="text"
            placeholder="Search for restaurant, item or more"
          />
        </div>
      </div>
      <div className=" max-w-[80%] container mx-auto flex">
        <Link target="_blank" to="/Resturents">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
            alt=""
          />
        </Link>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
            alt=""
          />
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
            alt=""
          />
        </a>
        <a href="https://www.swiggy.com/genie">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
