import axios from 'axios'
import config from '../../config'
import { Pokemon, PokemonType, Translation } from '../../domain/pokemon'

export const fetchPokemon = async () => {
  const response = await axios.get(`${config.pokeApiUrl}/pokemon?limit=100`)
  return response.data.results
}

export const fetchPokemonById = async (id: number) => {
  const response = await axios.get(`${config.pokeApiUrl}/pokemon/${id}`)

  const transformedData: Pokemon  = {
    name: response.data.name,
    types: response.data.types.map((typeInfo: PokemonType) => ({
      slot: typeInfo.slot,
      type: {
        name: typeInfo.type.name,
        url: typeInfo.type.url,
      },
    })),
  }

  return transformedData
}

const getTranslations = async (typeUrl: string) => {
  try {
    const response = await axios.get(typeUrl)
    const names = response.data.names

    return names.filter((nameInfo: Translation) => {
      return nameInfo.language.name === 'es' || nameInfo.language.name === 'ja'
    })
  } catch (error) {
    console.error(`Error getting translations for ${typeUrl}:`, error)
    return []
  }
}

export const fetchPokemonAndTypes = async (id: number) => {
  const response = await axios.get(`${config.pokeApiUrl}/pokemon/${id}`)
  
  const transformedData: Pokemon = {
    name: response.data.name,
    types: await Promise.all(
      response.data.types.map(async (typeInfo: PokemonType) => {
        const names = await getTranslations(typeInfo.type.url)
        return {
          slot: typeInfo.slot,
          type: {
            name: typeInfo.type.name,
            url: typeInfo.type.url,
            names,
          },
        }
      })
    ),
  }

  return transformedData
}
