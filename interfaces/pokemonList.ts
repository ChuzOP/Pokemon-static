export interface PokemonList {
    count: number;
    next?: string;
    previous?: null;
    results: SmallPokemon[];
}

export interface SmallPokemon{
    name: string;
    url: string;
    id: number;
    img: string;
}