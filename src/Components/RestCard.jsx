import React from "react";
import { Link } from "react-router";

const RestCard = ({ restInfo }) => {
  return (
    <Link to={"/Resturents/Mumbai/" + restInfo.info.id}>
      <div className="max-w-sm flex-none mb-5 transform transition duration-200 hover:scale-95  ">
        <img
          className="w-70 h-45 object-cover rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo.info.cloudinaryImageId
          }
        ></img>
        <div className="h-32 w-70 p-2 bg-white drop-shadow-xl rounded-2xl">
          <p className="font-bold">{restInfo.info.name}</p>
          <p className="font-normal">⭐{restInfo.info.sla.slaString}</p>
          <p className="font-normal">{restInfo.info.cuisines.join(" ")}</p>
          <p className="font-normal">{restInfo.info.areaName}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestCard;
