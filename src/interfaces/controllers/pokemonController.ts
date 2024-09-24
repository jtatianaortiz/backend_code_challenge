import { Request, Response } from 'express'
import { 
  fetchPokemon, 
  fetchPokemonById, 
  fetchPokemonAndTypes 
} from '../../application/services/pokemonService'
import { validateAndParseId } from '../../utils/validateId'

export const getPokemon = async (_req: Request, res: Response) => {
  try {
    const pokemonList = await fetchPokemon()
    res.json(pokemonList)
  } catch (error) {
    res.status(500).json({ message: 'Error getting list of Pokémon' })
  }
}

export const getPokemonById = async (req: Request, res: Response) => {
  try {
    const id = validateAndParseId(req.params.id)

    if (id === null) {
      return res.status(400).json({ message: 'Invalid Pokémon ID. It must be a number.' })
    }

    const PokemonById = await fetchPokemonById(id)
    return res.json(PokemonById)
  } catch (error) {
    return res.status(404).json({ message: 'Pokemon not found!' })
  }
}

export const getPokemonAndTypes = async (req: Request, res: Response) => {
  try {
    const id = validateAndParseId(req.params.id)

    if (id === null) {
      return res.status(400).json({ message: 'Invalid Pokémon ID. It must be a number.' })
    }

    const response = await fetchPokemonAndTypes(id)
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: 'Error getting Pokémon translation' })
  }
}
