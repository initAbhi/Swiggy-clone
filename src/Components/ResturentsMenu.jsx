import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemCards from "./ItemCards";
import { Link } from "react-router";
import ShimmerEffect2 from "./ShimmerEffect2";

const ResturentsMenu = () => {
  let { id } = useParams();
  const [RestData, setRestData] = useState([]);
  const [Selected, setSelected] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const SwiggyApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.079991&lng=72.8921617&restaurantId=${id}`;

      const response = await fetch(proxyServer + SwiggyApi);
      const data = await response.json();
      const tempData =
        data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
      const filterdata = tempData.filter((item) => "title" in item.card.card);
      setRestData(filterdata);
    };
    FetchData();
  }, []);

  if (RestData.length === 0) {
    return <ShimmerEffect2 />;
  }

  return (
    <div>
      <div className="w-[80%] mx-auto mt-20">
        <Link to={`/Resturents/Mumbai/${id}/search`}>
          <p className="w-full bg-gray-300 text-center text-xl py-1 rounded-xl">
            Search for dishes
          </p>
        </Link>
      </div>
      <div className="w-[80%] mx-auto mt-10">
        <button
          className={`border mr-5 rounded-lg p-1 w-12 ${
            Selected === "veg" ? "bg-green-600" : ""
          }`}
          onClick={() => setSelected(Selected === "veg" ? null : "veg")}
        >
          Veg
        </button>

        <button
          className={`border mr-5 rounded-lg p-1 w-20 ${
            Selected === "nonveg" ? "bg-red-600" : ""
          }`}
          onClick={() => setSelected(Selected === "nonveg" ? null : "nonveg")}
        >
          Non-Veg
        </button>
      </div>
      <div className="container mx-auto mt-10 max-w-[80%]">
        {RestData.map((item) => (
          <ItemCards
            key={item.card.card.title}
            item={item.card.card}
            Selected={Selected}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturentsMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.079991&lng=72.8921617&restaurantId=

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.079991&lng=72.8921617&restaurantId=722372
