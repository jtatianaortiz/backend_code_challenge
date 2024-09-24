export interface Translation {
  language: {
    name: string
    url: string
  }
  name: string
}

export interface PokemonType {
    slot: number
    type: {
      name: string
      url: string
      names?: Translation[]
    }
}

export interface Pokemon {
  name: string
  types: PokemonType[]
}
