import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// All Products
export const fetchAPI = createAsyncThunk(
  "products/All",
  async ({ category = "", limit = 10, page = 1, q = "" } = {}) => {
    const response = await axiosInstance.get("/products/search", {
      params: { category, limit, page, q },
    });
    return response.data;
  },
);
// One Product
export const fetchProduct = createAsyncThunk("products/item", async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
});
// Featured Products
export const fetchFeatured = createAsyncThunk(
  "products/featured/",
  async () => {
    const response = await axiosInstance.get("/products/featured");
    return response.data;
  },
);
// Category
export const fetchCategory = createAsyncThunk(
  "products/category",
  async (category) => {
    const response = await axiosInstance.get(`products/category/${category}`);
    return response.data;
  },
);
// Category Names
export const fetchCategoryName = createAsyncThunk(
  "products/categories",
  async () => {
    const response = await axiosInstance.get("/categories");
    return response.data;
  },
);
// Similar Products
export const fetchSimilar = createAsyncThunk("products/similar", async (id) => {
  const response = await axiosInstance.get(`products/similar/${id}`);
  return response.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    featured: [],
    category: [],
    categories: [],
    similar: [],
    listStatus: "idle",
    featuredStatus: "idle",
    productStatus: "idle",
    categoryStatus: "idle",
    CategoryNameStatus: "idle",
    similarStatus: "idle",
    error: "",
    totalProducts: 0,
    totalPages: 0,
    currentPage: 1,
    currentProduct: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      // All Products
      .addCase(fetchAPI.pending, (state) => {
        state.listStatus = "loading";
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.items = action.payload.results;
        state.totalProducts = action.payload.info.totalProductsFound;
        state.totalPages = action.payload.info.totalPages;
        state.currentPage = action.payload.info.currentPage;
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        state.listStatus = "rejected";
        state.error = `failed to fetch, ${action.error.message}`;
      })
      // One Product
      .addCase(fetchProduct.pending, (state) => {
        state.productStatus = "loading";
        state.currentProduct = {};
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.currentProduct = action.payload.product;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.productStatus = "rejected";
        state.error = `failed to fetch, ${action.error.message}`;
      })
      // Featured Products
      .addCase(fetchFeatured.pending, (state) => {
        state.featuredStatus = "loading";
        state.featured = [];
      })
      .addCase(fetchFeatured.fulfilled, (state, action) => {
        state.featuredStatus = "succeeded";
        state.featured = action.payload.featured;
      })
      .addCase(fetchFeatured.rejected, (state, action) => {
        state.featuredStatus = "rejected";
        state.error = `failed to fetch, ${action.error.message}`;
      })
      // Category
      .addCase(fetchCategory.pending, (state) => {
        state.categoryStatus = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categoryStatus = "succeeded";
        state.category = action.payload.results;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.categoryStatus = "rejected";
        state.error = `failed to fetch, ${action.error.message}`;
      })
      // Categories Name
      .addCase(fetchCategoryName.pending, (state) => {
        state.CategoryNameStatus = "loading";
      })
      .addCase(fetchCategoryName.fulfilled, (state, action) => {
        state.CategoryNameStatus = "succeeded";
        state.categories = action.payload.categories;
      })
      .addCase(fetchCategoryName.rejected, (state, action) => {
        state.CategoryNameStatus = "rejected";
        state.error = action.error.message;
      })
      // Similar Products
      .addCase(fetchSimilar.pending, (state) => {
        state.similarStatus = "loading";
      })
      .addCase(fetchSimilar.fulfilled, (state, action) => {
        state.similarStatus = "succeeded";
        state.similar = action.payload.results;
      })
      .addCase(fetchSimilar.rejected, (state, action) => {
        state.similarStatus = "rejected";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
