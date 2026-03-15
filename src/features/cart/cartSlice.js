import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const isExist = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (isExist) {
        isExist.quantity++;
        isExist.totalPrice = Number(isExist.totalPrice) + Number(newItem.price);
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalAmount = Number(state.totalAmount) + Number(newItem.price);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
