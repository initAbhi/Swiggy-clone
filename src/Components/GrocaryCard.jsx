import React from "react";

const GrocaryCard = ({ foodData }) => {
  return (
    <div>
      <div className="w-40 h-50 object-cover mt-12 ">
        <a href={foodData.action.link}>
          <img
            src={
              `https://media-assets.swiggy.com/swiggy/image/upload/` +
              foodData?.imageId
            }
          />
        </a>
        <h2 className="text-center font-bold">{foodData.action.text}</h2>
      </div>
    </div>
  );
};

export default GrocaryCard;
