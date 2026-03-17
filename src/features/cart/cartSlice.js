import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  try {
    const localCart = localStorage.getItem("cart");
    return localCart
      ? JSON.parse(localCart)
      : { items: [], totalQuantity: 0, totalAmount: 0, showModal: false };
  } catch (error) {
    console.log(error);
    return { items: [], totalQuantity: 0, totalAmount: 0, showModal: false };
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    ...loadCart(),
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
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    confirmPayment: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.showModal = false;
    },
  },
});

export const {
  addItem,
  reduceQuantity,
  removeItem,
  toggleModal,
  confirmPayment,
} = cartSlice.actions;
export default cartSlice.reducer;
