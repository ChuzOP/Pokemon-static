import { Button, Card, Grid, Text, Image, Container } from "@nextui-org/react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="pokemonss">
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "./no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 css={{ fontWeight: "bolder" }} transform="capitalize">
                {" "}
                {pokemon.name}{" "}
              </Text>
              <Button color="secondary" ghost>
                {" "}
                Add Favorites
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt="poke-img-front"
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt="poke-img-front"
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt="poke-img-front"
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt="poke-img-front"
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // your fetch function here

  const pokePages = [...Array(151)].map((value, index) => `${index + 1}`); //funcion para crear un array con 151 numeros, se podrian usar otras funcionalidades (while, for ...)

  return {
    paths: pokePages.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }; // el "as" de aqui es la manera en la que nosotros tiparemos los params, de otra forma seria más grande y poco legible
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokePage;
