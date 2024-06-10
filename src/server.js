import express from 'express'
import routes from './routes.js'
import { env } from './env/index.js'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(env.PORT, () => {console.log(`🔥 Server running at http://localhost:${env.PORT}`)})