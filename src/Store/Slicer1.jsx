import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItems: (state, action) => {
      // Add new item with default quantity of 1
      state.items.push({ ...action.payload, quantity: 1 });
      state.count++;
    },
    IncrementItems: (state, action) => {
      const element = state.items.find((item) => item.id === action.payload.id);
      element.quantity += 1;
      state.count++;
    },
    DecrementItems: (state, action) => {
      const element1 = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (element1.quantity > 1) {
        element1.quantity -= 1;
      }
      state.count--;
    },
  },
});

export const { addItems, IncrementItems, DecrementItems } = cart.actions;
export default cart.reducer;
