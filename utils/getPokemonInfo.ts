import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async( nameOrID : string) => {

  try {

    const { data } = await pokeApi.get<Pokemon>(`pokemon/${nameOrID}`);
  
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      abilities: data.abilities,
      types: data.types
    }
    

  } catch (error) {
    return null;
  }

};
