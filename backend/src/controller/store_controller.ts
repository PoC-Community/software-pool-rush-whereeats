import { PrismaClient, Store } from '@prisma/client'

const prisma = new PrismaClient()

const createStore = async (data: {
  storeName: Store['storeName']
  openingHours: Store['openingHours']
}) => {
  try {
    const store = await prisma.store.create({
      data,
    })
    return store
  } catch (error) {
    console.error(error)
    throw error
  }
}

const getArtists = async () => {
  try {
    const artists = await prisma.artist.findMany()
    return artists
  } catch (error) {
    console.error(error)
    throw error
  }
}

const getArtist = async (id: Artist['id']) => {
  try {
    const artist = await prisma.artist.findOne({
      where: {
        id,
      },
    })
    return artist
  } catch (error) {
    console.error(error)
    throw error
  }
}

const updateArtist = async (
  id: string,
  data: Partial<{ name: Artist['name']; nationality: Artist['nationality'] }>
) => {
  try {
    const artist = await prisma.artist.update({
      where: {
        id,
      },
      data,
    })
    return artis
  } catch (error) {
    console.error(error)
    throw error
  }
}

const deleteArtist = async (id: Artist['id']) => {
  try {
    await prisma.artist.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default {
  createStore,
  getArtists,
  getArtist,
  updateArtist,
  deleteArtist,
}


