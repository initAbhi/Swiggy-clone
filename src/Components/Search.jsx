import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useParams } from "react-router";

const Search = () => {
  const { id } = useParams();
  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);
  // console.log(food);

  useEffect(() => {
    const FetchData = async () => {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const SwiggyApi = `https://www.swiggy.com/dapi/menu/pl/search?lat=19.0795697&lng=72.88773139999999&restaurantId=${id}&isMenuUx4=true&query=${food}&submitAction=ENTER`;

      const response = await fetch(proxyServer + SwiggyApi);
      const data = await response.json();
      console.log(data);
      // const tempData =
      //   data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
      // const filterdata = tempData.filter((item) => "title" in item.card.card);
      setRestData(data);
    };
    if (food.length > 1) {
      FetchData();
    }
  }, [food]);
  return (
    <>
      <div className="w-[60%] mx-auto mt-20 flex justify-center  border-1 p-2 bg-gray-300 rounded-full">
        <input
          onChange={(e) => setFood(e.target.value)}
          className="w-full text-xl"
          type="text"
          placeholder="Search food.."
        />
        <IoSearchSharp className="text-2xl cursor-pointer" />
      </div>
    </>
  );
};

export default Search;
