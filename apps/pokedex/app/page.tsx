"use client";
import React from "react";
import PokemonDataGrid, {
  PokemansType,
  PokemanType,
} from "./PokemonDataGrid/PokemonDataGrid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "./Redux/pokemonSlice";
import { AppDispatch } from "./Redux/store";
import { DEFAULT_MIN_VERSION } from "tls";

// interface Pokemon {
//   name: string;
//   url: string;
// }
// interface results extends Array<Pokemon> {}
interface PokemonResponse {
  results: PokemansType;
}
interface stateType {
  pokemon: {
    status: string;
    data: PokemonResponse;
    error: string;
  };
}

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, data, error } = useSelector(
    (state: stateType) => state.pokemon,
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemonData());
    }
  }, [status, dispatch]);

  if (status === "loading" || status === "idle") {
    return <div suppressHydrationWarning={true}></div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-10">
      <div className="mb-10 flex justify-center text-xl font-bold">
        LIST OF POKEMONS
      </div>
      <PokemonDataGrid pokemans={data.results} />
    </div>
  );
}

export default App;
