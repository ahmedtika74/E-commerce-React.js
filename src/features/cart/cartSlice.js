import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  try {
    const localCart = localStorage.getItem("cart");
    return localCart
      ? JSON.parse(localCart)
      : { items: [], totalQuantity: 0, totalAmount: 0 };
  } catch (error) {
    console.log(error);
    return { items: [], totalQuantity: 0, totalAmount: 0 };
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: loadCart(),
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
    reduceQuantity: (state, action) => {
      const cartItem = action.payload;
      const isExist = state.items.find((item) => item.id === cartItem.id);

      if (!isExist) return;

      state.totalQuantity--;
      state.totalAmount = Number(state.totalAmount) - Number(cartItem.price);

      if (isExist.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== cartItem.id);
      } else {
        isExist.quantity--;
        isExist.totalPrice =
          Number(isExist.totalPrice) - Number(cartItem.price);
      }
    },
    removeItem: (state, action) => {
      const cartItem = action.payload;

      state.totalQuantity -= cartItem.quantity;
      state.totalAmount -= cartItem.quantity * cartItem.price;

      state.items = state.items.filter((item) => item.id !== cartItem.id);
    },
  },
});

export const { addItem, reduceQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
