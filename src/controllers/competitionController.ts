import { Request, Response } from 'express'

type Competition = {
  id: number
  name: string
  description: string
  recommendedLevel: number
  prize: string
  startDate: Date
  endDate: Date
  eventId: number
}

let competitions: Competition[] = [
  { id: 1, name: 'Sword Art Online Tournament', description: 'Annual tournament for SAO players', recommendedLevel: 50, prize: 'Legendary item', startDate: new Date('2023-12-20'), endDate: new Date('2023-12-22'), eventId: 1 },
  { id: 2, name: 'Boss Hunting Competition', description: 'Event to hunt down powerful bosses', recommendedLevel: 70, prize: 'Rare equipment set', startDate: new Date('2024-01-05'), endDate: new Date('2024-01-07'), eventId: 2 },
]

export const getCompetitions = (req: Request, res: Response) => {
  res.json(competitions)
}

export const createCompetition = (req: Request, res: Response) => {
  const newCompetition: Competition = req.body
  newCompetition.id = competitions.length + 1
  competitions.push(newCompetition)
  res.status(201).json(newCompetition)
}

export const updateCompetition = (req: Request, res: Response) => {
  const { id } = req.params
  const index = competitions.findIndex(c => c.id === parseInt(id))
  if (index !== -1) {
    competitions[index] = { ...competitions[index], ...req.body }
    res.json(competitions[index])
  } else {
    res.status(404).json({ message: 'Competition not found' })
  }
}

export const deleteCompetition = (req: Request, res: Response) => {
  const { id } = req.params
  const index = competitions.findIndex(c => c.id === parseInt(id))
  if (index !== -1) {
    const deletedCompetition = competitions.splice(index, 1)
    res.json(deletedCompetition)
  } else {
    res.status(404).json({ message: 'Competition not found' })
  }
}
