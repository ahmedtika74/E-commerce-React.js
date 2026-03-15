import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAPI = createAsyncThunk("products/fetchApi", async () => {
  const response = await axios.get(
    "https://69b61591583f543fbd9cec42.mockapi.io/api/v1/courses",
  );
  return response.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAPI.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
