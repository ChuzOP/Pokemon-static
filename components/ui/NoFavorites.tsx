import { Container, Image, Text } from '@nextui-org/react'
import React, { FC } from 'react'

export const NoFavorites: FC = () => {
  return (
    <Container
    css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }}
    >
        <Text h1>There arent favorites pokemons.....</Text>
        <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg'
        width={300}
        height={300}
        alt="snorlax mimido"
        />
    </Container>
  )
}
