import React, { useState, useEffect } from 'react'

import { Layout } from '../../components/layouts'
import { FavoritePokemon, NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils';


const FavoritesPage = () => {

  const [favorite, setFavorite] = useState<number[]>([]);

  useEffect(() => {
    setFavorite( localFavorites.favoritesPokemons() )
  }, [])
  

  return (
    <Layout title='Pokemons Favoritos'>
      
{
  favorite.length === 0 ?  <NoFavorites /> : (
    <FavoritePokemon favorite={favorite} />
  )
}


    </Layout>
  )
}

export default FavoritesPage