"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchPokemonData = createAsyncThunk(
  "pokeman/fetchPokemonData",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
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
