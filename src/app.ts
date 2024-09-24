import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import pokemonRoutes from './interfaces/routes/pokemonRoutes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', pokemonRoutes)

export default app
