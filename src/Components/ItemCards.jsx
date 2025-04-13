import React, { useState } from "react";
import RestInfo from "./RestInfo";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ItemCards = ({ item, Selected }) => {
  const [isOpen, setisOpen] = useState(true);

  if (!isOpen) {
    return (
      // Fixed the typo here
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-2xl">{item.title}</p>
          <button className="text-3xl mr-10" onClick={() => setisOpen(!isOpen)}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>
    );
  }

  if (Selected === "veg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-2xl">{item.title}</p>
          <button className="text-3xl mr-10" onClick={() => setisOpen(!isOpen)}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        <div>
          {item?.itemCards
            ?.filter((food) => "isVeg" in food?.card?.info)
            .map((items) => (
              <RestInfo key={items?.card?.info?.id} items={items?.card?.info} />
            ))}
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }
  if (Selected === "nonveg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-2xl">{item.title}</p>
          <button className="text-3xl mr-10" onClick={() => setisOpen(!isOpen)}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        <div>
          {item?.itemCards
            ?.filter((food) => !("isVeg" in food?.card?.info))
            .map((items) => (
              <RestInfo key={items?.card?.info?.id} items={items?.card?.info} />
            ))}
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <p className="text-2xl">{item.title}</p>
        <button className="text-3xl mr-10" onClick={() => setisOpen(!isOpen)}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div>
        {item?.itemCards?.map((items) => (
          <RestInfo key={items?.card?.info?.id} items={items?.card?.info} />
        ))}
      </div>
      <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
    </div>
  );
};

export default ItemCards;
