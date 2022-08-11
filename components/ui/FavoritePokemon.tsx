import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavPokeCard } from "./FavPokeCard";

interface Props {
  favorite: number[];
}

export const FavoritePokemon: FC<Props> = ({ favorite }) => {
  return (
    <Grid.Container>
      {favorite.map((id) => (

        <FavPokeCard key={id} pokemonId={id} />

      ))}
    </Grid.Container>
  );
};
