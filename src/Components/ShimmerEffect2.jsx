import React from "react";

const ShimmerEffect2 = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="justify-center mx-auto mt-4 max-w-[80%] ">
      {arr.map((idx) => (
        <div className="w-[100%] mr-6 rounded-2xl " key={idx}>
          <div className="w-full h-45 mt-10 bg-gray-300"></div>
          <div className="w-full mx-auto mt-3 space-y-3">
            <div className="h-6  bg-gray-300 rounded-lg"></div>
            <div className="h-6  bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEffect2;
