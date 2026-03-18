import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAPI = createAsyncThunk(
  "products/All",
  async ({ category = "", limit = 10, page = 1, q = "" } = {}) => {
    const response = await axios.get(
      "https://electronics-store-api-two.vercel.app/api/products/search",
      { params: { category, limit, page, q } },
    );
    return response.data;
  },
);

export const fetchProduct = createAsyncThunk("products/item/", async (id) => {
  const response = await axios.get(
    `https://electronics-store-api-two.vercel.app/api/products/${id}`,
  );
  return response.data;
});

export const fetchFeatured = createAsyncThunk(
  "products/featured/",
  async () => {
    const response = await axios.get(
      "https://electronics-store-api-two.vercel.app/api/products/featured",
    );
    return response.data;
  },
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    featured: [],
    status: "idle",
    error: "",
    totalProducts: 0,
    totalPages: 0,
    currentPage: 1,
    categories: "",
    currentProduct: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      // All Products
      .addCase(fetchAPI.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.results;
        state.totalProducts = action.payload.info.totalProductsFound;
        state.totalPages = action.payload.info.totalPages;
        state.currentPage = action.payload.info.currentPage;
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        state.status = "rejected";
        state.error = `failed to fetch, ${action.error.message}`;
      })
      // One Product
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
        state.currentProduct = {};
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentProduct = action.payload.product;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "rejected";
        state.error = `failed to fetch, ${action.error.message}`;
      })
      // Featured Products
      .addCase(fetchFeatured.pending, (state) => {
        state.status = "loading";
        state.featured = [];
      })
      .addCase(fetchFeatured.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.featured = action.payload.featured;
      })
      .addCase(fetchFeatured.rejected, (state, action) => {
        state.status = "rejected";
        state.error = `failed to fetch, ${action.error.message}`;
      });
  },
});

export default productSlice.reducer;
