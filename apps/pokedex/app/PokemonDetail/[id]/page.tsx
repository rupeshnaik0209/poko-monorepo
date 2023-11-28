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
    <div className="flex flex-col content-center justify-self-center items-center mt-16 gap-y-2 bg-orange-200">
      <PokoCard pokeMon={pokemon} />
      <h3>Height : {pokemon.height}</h3>
      No of moves :- {noOfMoves(pokemon.moves)}
      <h2>List of moves -</h2>
      <ul
        className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 gap-4"
        style={{ listStyleType: "none" }}
      >
        {pokemon.moves.map((move: any) => (
          <li
            key={move.name}
            className="flex bg-white mt-4 w-40 h-10 items-center self-center place-content-center capitalize hover:uppercase"
          >
            {move.move.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
