import { Request, Response } from 'express'

interface Ranking {
  id: number
  name: string
  description: string
  competitionId: number
}

let rankings: Ranking[] = [
  { id: 1, name: 'Top Players', description: 'Ranking of top players in the game', competitionId: 1 },
  { id: 2, name: 'Guild Rankings', description: 'Ranking of guilds based on performance', competitionId: 2 },
]

export const getRankings = (req: Request, res: Response) => {
  res.json(rankings)
}

export const createRanking = (req: Request, res: Response) => {
  const newRanking: Ranking = req.body
  newRanking.id = rankings.length + 1
  rankings.push(newRanking)
  res.status(201).json(newRanking)
}

export const updateRanking = (req: Request, res: Response) => {
  const { id } = req.params
  const index = rankings.findIndex(r => r.id === parseInt(id))
  if (index !== -1) {
    rankings[index] = { ...rankings[index], ...req.body }
    res.json(rankings[index])
  } else {
    res.status(404).json({ message: 'Ranking not found' })
  }
}

export const deleteRanking = (req: Request, res: Response) => {
  const { id } = req.params
  const index = rankings.findIndex(r => r.id === parseInt(id))
  if (index !== -1) {
    const deletedRanking = rankings.splice(index, 1)
    res.json(deletedRanking)
  } else {
    res.status(404).json({ message: 'Ranking not found' })
  }
}
