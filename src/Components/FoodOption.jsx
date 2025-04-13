import React, { useState } from "react";
import FoodData from "../Utils/FoodData";
import FoodCard from "./FoodCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FoodOption = () => {
  const [slide, setSlide] = useState(0); // Set initial state to 0
  const maxSlide = Math.max(0, FoodData.length - 5); // Adjust based on visible cards

  const handleNext = () => {
    setSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="w-[84%] container mx-auto">
      {/* Header */}
      <div className="w-[95%] flex ml-7 mt-16 justify-between">
        <h1 className="text-2xl font-bold">What is in your mind today.</h1>
        <div>
          <button
            onClick={handlePrev}
            className="mr-3 rounded-full bg-gray-300 p-2 disabled:opacity-50"
            disabled={slide === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full bg-gray-300 p-2 disabled:opacity-50"
            disabled={slide >= maxSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full mt-10">
        <div
          className="flex gap-3 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${slide * 200}px)` }} // Adjust per card width
        >
          {FoodData.map((foodData) => (
            <FoodCard key={foodData.id} foodData={foodData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodOption;
