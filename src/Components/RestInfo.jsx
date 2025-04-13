import { useDispatch, useSelector } from "react-redux";
import { addItems, IncrementItems, DecrementItems } from "../Store/Slicer1";

const RestInfo = ({ items }) => {
  const cartItems = useSelector((state) => state.cartSlice.items);
  const element = cartItems.find((item) => item.id === items.id);
  const counter = element ? element.quantity : 0;
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(addItems({ ...items, quantity: 1 }));
  }
  function handleIncrementItem() {
    dispatch(IncrementItems({ id: items.id }));
  }
  function handleDecrementItem() {
    dispatch(DecrementItems({ id: items.id }));
  }

  return (
    <div className="w-full flex justify-between items-start p-4 border-b border-gray-200 gap-4">
      <div className="w-[70%] space-y-2">
        <p className="text-xl font-semibold text-gray-800">{items?.name}</p>
        <p className="text-gray-700 font-bold">
          {"₹" + (items.price ? items.price / 100 : items.defaultPrice / 100)}
        </p>

        <div className="flex items-center ">
          <span className="text-green-600 font-semibold">
            {items.ratings.aggregatedRating.rating}
          </span>
          <span className="text-gray-600 text-sm">
            ({items.ratings.aggregatedRating.ratingCountV2} reviews)
          </span>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">
          {items.description}
        </p>
      </div>
      <div className="w-[20%] relative flex flex-col items-center">
        <img
          className="w-full h-40 object-cover rounded-lg shadow-sm"
          src={
            `https://media-assets.swiggy.com/swiggy/image/upload/` +
            items.imageId
          }
          alt={items.name}
        />
        {counter === 0 ? (
          <button
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-600 border border-green-600 px-4 py-1 rounded-md shadow-md hover:bg-green-100 transition-all"
            onClick={handleAddItem}
          >
            Add
          </button>
        ) : (
          <div className="flex gap-3 text-xl border bg-white absolute bottom-2 text-center text-green-400 rounded-lg p-1">
            <button className="px-1 text-xl" onClick={handleDecrementItem}>
              -
            </button>
            <span>{counter}</span>
            <button className="px-1 text-xl" onClick={handleIncrementItem}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestInfo;
