import { Router } from 'express'
import { 
  getPokemon, 
  getPokemonById, 
  getPokemonAndTypes 
} from '../controllers/pokemonController'

const router = Router()

router.get('/pokemon', getPokemon)
router.get('/pokemon/:id', getPokemonById)
router.get('/pokemonAndTypes/:id', getPokemonAndTypes)

export default router
