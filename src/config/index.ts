import dotenv from 'dotenv'

dotenv.config()

const config = {
  port: process.env.PORT || 3000,
  pokeApiUrl: process.env.POKEAPI_URL || 'https://pokeapi.co/api/v2',
}

export default config
