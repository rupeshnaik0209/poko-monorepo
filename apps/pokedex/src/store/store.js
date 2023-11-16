import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slice/pokeman';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;