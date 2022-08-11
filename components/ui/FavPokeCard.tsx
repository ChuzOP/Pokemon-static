import React, { FC } from 'react'
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number;
}

export const FavPokeCard : FC<Props> = ({pokemonId}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`pokemon/${pokemonId}`);
  };

  return (
    <Grid key={pokemonId} css={{padding: 10}}>
    <Card onClick={handleClick} hoverable clickable css={{ padding: 10 }}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        alt="Image-sprite-master"
        width={"100%"}
        height={130}
      />
    </Card>
  </Grid>
  )
}
