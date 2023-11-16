import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokoCard } from "components";
import { noOfMoves } from "utils";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokeMon]: [any, any] = useState(undefined);

  useEffect(() => {
    fetchPokemonDetail(id);
  }, [id]);
  //   const { data } = useSelector((state:any) => state.pokemon);
  //   const pokemon = id && data[parseInt(id, 10)];

  const fetchPokemonDetail = async (id: any) => {
    const response = await fetch(`${API_URL}/${id}/`);
    const data = await response.json();
    setPokeMon(data);
  };

  if (!pokemon) {
    return <div>Pokeman Details Loading</div>;
  }


  return (
    <div>
      <PokoCard pokeMon={pokemon} />
      No of moves :- {noOfMoves(pokemon.moves)}
      <h3>Height : {pokemon.height}</h3>
      <h2>List of moves -</h2>
      <ul style={{listStyleType: "none"}}>
        {pokemon.moves.map((move: any) => (
          <li>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
