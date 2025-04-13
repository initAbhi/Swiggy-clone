import React, { useState } from "react";
import DineData from "../Utils/DineData";
import DineCard from "./DineCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DineOut = () => {
  const [slide, setSlide] = useState(0);
  const cardWidth = 250; // Adjust based on card width
  const visibleCards = 5; // Number of visible cards at a time
  const maxSlide = Math.max(0, DineData.length - visibleCards); // Limit sliding

  const handleNext = () => {
    setSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="container mx-auto mt-20 max-w-[80%]">
      {/* Header & Controls */}
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold mb-4">
          Discover best restaurants on Dineout
        </h2>
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

      {/* Sliding Cards */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${slide * cardWidth}px)` }}
        >
          {DineData.map((restData) => (
            <DineCard key={restData.info.id} restData={restData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DineOut;
