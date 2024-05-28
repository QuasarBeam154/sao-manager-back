import { Request, Response } from 'express'

type Player = {
  id: number
  username: string
  level: number
  creationDate: Date
  status: string
}

let players: Player[] = [
  { id: 1, username: 'kirito', level: 100, creationDate: new Date(), status: 'active' },
  { id: 2, username: 'asuna', level: 95, creationDate: new Date(), status: 'active' },
]

export const getPlayers = (req: Request, res: Response) => {
  res.json(players)
}

export const createPlayer = (req: Request, res: Response) => {
  const newPlayer: Player = req.body
  newPlayer.id = players.length + 1
  newPlayer.creationDate = new Date()
  players.push(newPlayer)
  res.status(201).json(newPlayer)
}

export const updatePlayer = (req: Request, res: Response) => {
  const { id } = req.params
  const index = players.findIndex(p => p.id === parseInt(id))
  if (index !== -1) {
    players[index] = { ...players[index], ...req.body }
    res.json(players[index])
  } else {
    res.status(404).json({ message: 'Player not found' })
  }
}

export const deletePlayer = (req: Request, res: Response) => {
  const { id } = req.params
  const index = players.findIndex(p => p.id === parseInt(id))
  if (index !== -1) {
    const deletedPlayer = players.splice(index, 1)
    res.json(deletedPlayer)
  } else {
    res.status(404).json({ message: 'Player not found' })
  }
}
