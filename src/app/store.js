import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";

const localStorageData = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.startsWith("cart/")) {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }
  return result;
};

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageData),
});
