import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import ShimmerEffect from "./ShimmerEffect";

const Restaurants = () => {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const proxyServer = "https://cors-anywhere.herokuapp.com/";
      // const swiggyApi =
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true";

      // const response = await fetch(proxyServer + swiggyApi);
      const response = await fetch(
        "https://swiggy-bakend.onrender.com/api/swiggy"
      );

      const data = await response.json();
      setRestData(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    };

    fetchData();
  }, []);
  // console.log(restData);

  if (restData.length === 0) {
    return <ShimmerEffect />;
  }

  return (
    <div className="container mx-auto mt-20 max-w-[80%]">
      <h2 className="text-2xl font-bold mb-4">
        Top restaurant chains in Mumbai
      </h2>
      <div className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hide">
        {restData.map((restInfo) => (
          <RestCard key={restInfo.info.id} restInfo={restInfo} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
