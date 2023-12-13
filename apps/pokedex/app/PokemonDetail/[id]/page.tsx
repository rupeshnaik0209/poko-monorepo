"use client";
import React, { useEffect, useState } from "react";
import { PokoCard } from "components";
import { noOfMoves } from "utils";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface move {
  name: string;
  move: { name: string };
}
interface moveTypes extends Array<move> {}
interface pokemon {
  id: number;
  name: string;
  height: number;
  moves: moveTypes;
}
const PokemonDetail = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const [pokemon, setPokeMon] = useState<pokemon | undefined>(undefined);

  useEffect(() => {
    fetchPokemonDetail(id);
  }, [id]);

  const fetchPokemonDetail = async (id: number) => {
    const response = await fetch(`${API_URL}/${id}/`);
    const data = await response.json();
    setPokeMon(data);
  };

  if (!pokemon) {
    return <div suppressHydrationWarning={true}></div>;
  }
  return (
    <div className="flex flex-col content-center justify-self-center items-center mt-16 gap-y-2 text-cyan-50 decoration-solid decoration-8">
      <div className="flex flex-col grow place-content-between bg-rose-700 w-8/12 h-24 p-4 rounded-md">
        <PokoCard pokeMon={pokemon} />
        <h3>Height : {pokemon.height}</h3>
        No of moves :- {noOfMoves(pokemon.moves)}
      </div>
      <div className="bg-white m-4 p-4">
        <h2 className="text-white-700 font-mono decoration-solid decoration-4">
          LIST OF MOVES -
        </h2>
        <ul
          className="grid grid-cols-4 grid-rows-3 gap-4"
          style={{ listStyleType: "none" }}
        >
          {pokemon.moves.map((move: move) => (
            <li
              key={move.move.name}
              className="flex bg-rose-700 text-cyan-50 mt-4 w-40 h-10 items-center self-center place-content-center capitalize hover:uppercase rounded-md"
            >
              {move.move.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
