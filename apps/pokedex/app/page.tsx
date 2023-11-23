"use client";
import React from "react";
import PokemonDataGrid from "./PokemonDataGrid/PokemonDataGrid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "./Redux/pokemonSlice";
import { AppDispatch } from "./Redux/store";
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, data, error } = useSelector((state: any) => state.pokemon);

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
    <div>
      <PokemonDataGrid pokemans={data.results} />
    </div>
  );
}

export default App;