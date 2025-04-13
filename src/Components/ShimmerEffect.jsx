import React from "react";

const ShimmerEffect = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hide gap-5 justify-center mx-auto mt-20 max-w-[80%]">
      {arr.map((idx) => (
        <div className="w-58 mb-2 space-y-5" key={idx}>
          <div className="w-56 h-45 rounded-xl bg-gray-300"></div>
          <div className="mx-auto mt-3 space-y-3">
            <div className="h-6 w-52 bg-gray-300 rounded-lg"></div>
            <div className="h-6 w-52 bg-gray-300 rounded-lg"></div>
            <div className="h-6 w-52 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEffect;
