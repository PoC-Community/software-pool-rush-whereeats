import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express, { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { SERVER_HOST, SERVER_PORT } from './src/config/config'

const app = express()
const PORT = SERVER_PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
  res.send(`server is running on http://${SERVER_HOST}:${PORT}/`)
})

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Home route')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`)
})
