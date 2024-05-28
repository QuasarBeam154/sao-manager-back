import { Request, Response } from 'express'

type Place = {
  id: number
  name: string
  type: string
  description: string
}

let places: Place[] = [
  { id: 1, name: 'Town of Beginnings', type: 'Town', description: 'Starting town for all players' },
  { id: 2, name: 'Floor 10 Castle', type: 'Castle', description: 'Stronghold on the 10th floor' },
]

export const getPlaces = (req: Request, res: Response) => {
  res.json(places)
}

export const createPlace = (req: Request, res: Response) => {
  const newPlace: Place = req.body
  newPlace.id = places.length + 1
  places.push(newPlace)
  res.status(201).json(newPlace)
}

export const updatePlace = (req: Request, res: Response) => {
  const { id } = req.params
  const index = places.findIndex(p => p.id === parseInt(id))
  if (index !== -1) {
    places[index] = { ...places[index], ...req.body }
    res.json(places[index])
  } else {
    res.status(404).json({ message: 'Place not found' })
  }
}

export const deletePlace = (req: Request, res: Response) => {
  const { id } = req.params
  const index = places.findIndex(p => p.id === parseInt(id))
  if (index !== -1) {
    const deletedPlace = places.splice(index, 1)
    res.json(deletedPlace)
  } else {
    res.status(404).json({ message: 'Place not found' })
  }
}
