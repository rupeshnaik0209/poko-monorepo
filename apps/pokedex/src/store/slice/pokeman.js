// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const API_URL = "https://pokeapi.co/api/v2/pokemon";

// export const fetchPokemans = createAsyncThunk("fetchAllPokemans", async () => {
//   const response = await fetch(`${API_URL}`);
//   return response.json();
// });
// const pokemanSlice = createSlice({
//   name: "pokeman",
//   initialState: {
//     staus: 'idle',
//     data: undefined,
//     isError: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchPokemans.pending, (state, action) => {
//       state.sattus = 'Loading';
//     });
//     builder.addCase(fetchPokemans.fulfilled, (state, action) => {
//       state.status = 'Suceeded';
//       state.data = action.payload;
//     });
//     builder.addCase(fetchPokemans.rejected, (state, action) => {
//       state.status = 'Failed';
//     });
//   },
// });
// export default pokemanSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchPokemonData = createAsyncThunk(
  "pokeman/fetchPokemonData",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data;
  }
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
