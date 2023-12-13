"use client";
import React, { useEffect, useState } from "react";
import { PokoCard } from "components";
import { noOfMoves } from "utils";
import { move, pokemon } from "../../PokemonTypes";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
    <div className="detail_container">
      <div className="detail_card">
        <PokoCard pokeMon={pokemon} />
        <h3>Height : {pokemon.height}</h3>
        No of moves :- {noOfMoves(pokemon.moves)}
      </div>
      <div>
        <h2 className="detail_heading">LIST OF MOVES -</h2>
        <ul className="detail_grid">
          {pokemon.moves.map((move: move) => (
            <li key={move.move.name} className="detail_main">
              {move.move.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
