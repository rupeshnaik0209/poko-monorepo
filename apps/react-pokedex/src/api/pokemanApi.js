import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    /*?offset=${(page - 1) * pageSize}&limit=${pageSize}*/
    // );
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};
