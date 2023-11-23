"use client";
import React, { useEffect, useState } from "react";
import { PokoCard } from "components";
import { noOfMoves } from "utils";
const API_URL = "https://pokeapi.co/api/v2/pokemon";
const PokemonDetail = ({ params }: any) => {
  const { id } = params;
  const [pokemon, setPokeMon]: [any, any] = useState(undefined);

  useEffect(() => {
    fetchPokemonDetail(id);
  }, [id]);

  const fetchPokemonDetail = async (id: any) => {
    const response = await fetch(`${API_URL}/${id}/`);
    const data = await response.json();
    setPokeMon(data);
  };

  if (!pokemon) {
    return <div suppressHydrationWarning={true}></div>;
  }

  return (
    <div className="flex flex-col content-center justify-self-center items-center">
      <PokoCard pokeMon={pokemon} />
      No of moves :- {noOfMoves(pokemon.moves)}
      <h3>Height : {pokemon.height}</h3>
      <h2>List of moves -</h2>
      <ul style={{ listStyleType: "none" }}>
        {pokemon.moves.map((move: any) => (
          <li key={move.name} className="bg-gray-400 mt-4">
            {move.move.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
