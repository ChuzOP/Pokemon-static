import React, { FC } from "react";
import { useRouter } from "next/router";

import { SmallPokemon } from "../../interfaces";

import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemon: SmallPokemon;
}

export const PokeCards: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id} onClick={handleClick}>
      <Card hoverable clickable>
        <Card.Body css={{ pd: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize" css={{ fontWeight: "bolder" }}>
                {pokemon.name}
              </Text>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
