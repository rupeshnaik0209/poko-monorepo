import React from "react";
import "./App.css";
import PokemonDataGrid from "./components/PokemanDataGrid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "./store/slice/pokeman";
import { AppDispatch } from ".";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, data, error } = useSelector((state: any) => state.pokemon);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemonData());
    }
  }, [status, dispatch]);

  if (status === "loading" || status === "idle") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  console.log(status);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route
            path="/"
            element={<PokemonDataGrid pokemans={data.results} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
