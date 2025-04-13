import React from "react";

const FoodCard = ({ foodData }) => {
  return (
    <div className="flex-grow shrink-0 duration-500 overflow-hidden  w-40 h-50 object-cover">
      <a href={foodData.action.link}>
        <img
          src={
            `https://media-assets.swiggy.com/swiggy/image/upload/` +
            foodData?.imageId
          }
        />
      </a>
    </div>
  );
};

export default FoodCard;
