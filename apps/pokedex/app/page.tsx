"use client";
import React from "react";
import PokemonDataGrid from "./PokemonDataGrid/PokemonDataGrid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "./Redux/pokemonSlice";
import { AppDispatch } from "./Redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, data, error } = useSelector((state: any) => state.pokemon);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
    <div className="App">
      <PokemonDataGrid pokemans={data.results} />
    </div>
  );
}

export default App;
