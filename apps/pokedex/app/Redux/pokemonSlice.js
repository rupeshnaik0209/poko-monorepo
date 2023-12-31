"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchPokemonData = createAsyncThunk(
  "pokeman/fetchPokemonData",
  async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
);

const pokemonSlice = createSlice({
  name: "pokeman",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
export { fetchPokemonData };
