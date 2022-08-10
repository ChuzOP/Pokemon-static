import { GetServerSideProps, NextPage } from "next";

import { PokemonList, SmallPokemon } from "../interfaces";
import { PokeCards } from "../components/pokemon";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";

import { Grid } from "@nextui-org/react";
interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokeCards key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>("pokemon?limit=151"); //el .get es un "genérico", osea que le puedo especificar el tipo de dato que es
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
