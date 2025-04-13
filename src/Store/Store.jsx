import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slicer1";
const store = configureStore({
  reducer: {
    cartSlice: CartReducer,
  },
});
export default store;
