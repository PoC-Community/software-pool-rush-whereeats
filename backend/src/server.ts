import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express, { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { PrismaClient } from '@prisma/client'
import { SERVER_HOST, SERVER_PORT } from './config/config'

const prisma = new PrismaClient()

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

app.get('/store', async (req, res) => {
  try {
    const stores = await prisma.store.findMany({
      where: { storeName: req.body.message },
    })
    res.json(stores)
  } catch (error) {
    res.status(400).send('Bad Request')
  }
})

app.get('/store/:id', async (req, res) => {
  const id = req.params
  try {
    const store = await prisma.store.findUnique({
      where: id,
    })
    res.json(store)
  } catch (error) {
    res.status(400).send('Bad Request')
  }
})

app.post('/store', async (req, res) => {
  try {
    const newStore = await prisma.store.create({
      data: {
        storeName: req.body.storeName,
        localisation: req.body.localisation,
        category: req.body.category,
        openingHours: req.body.openingHours,
        averagePrice: req.body.averagePrice,
        createdAt: req.body.createdAt,
      },
    })
    res.json(newStore)
  } catch (error) {
    res.status(400).send('Bad Request')
  }
})

app.put('/store/:id', async (req, res) => {
  try {
    const storeId = req.params.id
    const updatedStore = await prisma.store.update({
      where: { id: storeId },
      data: {
        storeName: req.body.storeName,
        localisation: req.body.localisation,
        category: req.body.category,
        openingHours: req.body.openingHours,
        averagePrice: req.body.averagePrice,
      },
    })
    res.json(updatedStore)
  } catch (error) {
    res.status(400).send('Bad Request')
  }
})

app.delete('/store/:id', async (req, res) => {
  try {
    const storeId = req.params.id
    const deletedStore = await prisma.store.delete({
      where: { id: storeId },
    })
    res.json(deletedStore)
  } catch (error) {
    res.status(400).send('Bad Request')
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`)
})
