import { Request, Response } from 'express'

type Match = {
  id: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  locationId: number
}

let matches: Match[] = [
  { id: 1, name: '1v1 Duel', description: 'Battle against another player', startDate: new Date('2023-11-15'), endDate: new Date('2023-11-15'), locationId: 1 },
  { id: 2, name: 'Guild Tournament Finals', description: 'Final showdown between top guilds', startDate: new Date('2023-12-10'), endDate: new Date('2023-12-10'), locationId: 2 },
]

export const getMatches = (req: Request, res: Response) => {
  res.json(matches)
}

export const createMatch = (req: Request, res: Response) => {
  const newMatch: Match = req.body
  newMatch.id = matches.length + 1
  matches.push(newMatch)
  res.status(201).json(newMatch)
}

export const updateMatch = (req: Request, res: Response) => {
  const { id } = req.params
  const index = matches.findIndex(m => m.id === parseInt(id))
  if (index !== -1) {
    matches[index] = { ...matches[index], ...req.body }
    res.json(matches[index])
  } else {
    res.status(404).json({ message: 'Match not found' })
  }
}

export const deleteMatch = (req: Request, res: Response) => {
  const { id } = req.params
  const index = matches.findIndex(m => m.id === parseInt(id))
  if (index !== -1) {
    const deletedMatch = matches.splice(index, 1)
    res.json(deletedMatch)
  } else {
    res.status(404).json({ message: 'Match not found' })
  }
}
