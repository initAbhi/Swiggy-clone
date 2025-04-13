import React from "react";

const CheckOutCard = ({ value }) => {
  return (
    <div className="w-[320px] p-4 border rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
      <div className="h-40 flex justify-center">
        <img
          className="h-full w-auto object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`}
          alt={value.name}
        />
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-lg text-gray-800 truncate">
          {value.name}
        </h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-gray-700 font-medium">
            ₹{value.defaultPrice / 100}
          </p>
          <p className="text-gray-500 text-sm">Qty: {value.quantity}</p>
        </div>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {value.description}
        </p>
      </div>
    </div>
  );
};

export default CheckOutCard;
