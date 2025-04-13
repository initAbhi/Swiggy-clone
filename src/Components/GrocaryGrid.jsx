import React, { useState } from "react";
import Grocary from "../Utils/Grocery";
import GrocaryCard from "./GrocaryCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const GrocaryGrid = () => {
  const [slide, setSlide] = useState(0);
  const cardWidth = 220; // Adjust based on card width
  const maxSlide = Math.max(0, Grocary.length - 5); // Adjust based on visible cards

  const handleNext = () => {
    setSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="mt-16 w-[80%] container mx-auto">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">Shop groceries on Instamart</h1>
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

      {/* Scrollable Cards */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${slide * cardWidth}px)` }}
        >
          {Grocary.map((foodData) => (
            <GrocaryCard key={foodData.id} foodData={foodData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrocaryGrid;
