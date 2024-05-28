import { Request, Response } from 'express'

interface Mission {
  id: number
  title: string
  description: string
  recommendedLevel: number
  reward: string
  status: string
  locationId: number
}

let missions: Mission[] = [
  { id: 1, title: 'Retrieve the Lost Artifact', description: 'Find and retrieve the artifact from the dungeon', recommendedLevel: 10, reward: 'Gold coins', status: 'pending', locationId: 1 },
  { id: 2, title: 'Defeat the Goblin King', description: 'Defeat the goblin king and save the village', recommendedLevel: 15, reward: 'Magical weapon', status: 'in progress', locationId: 2 },
]

export const getMissions = (req: Request, res: Response) => {
  res.json(missions)
}

export const createMission = (req: Request, res: Response) => {
  const newMission: Mission = req.body
  newMission.id = missions.length + 1
  missions.push(newMission)
  res.status(201).json(newMission)
}

export const updateMission = (req: Request, res: Response) => {
  const { id } = req.params
  const index = missions.findIndex(m => m.id === parseInt(id))
  if (index !== -1) {
    missions[index] = { ...missions[index], ...req.body }
    res.json(missions[index])
  } else {
    res.status(404).json({ message: 'Mission not found' })
  }
}

export const deleteMission = (req: Request, res: Response) => {
  const { id } = req.params
  const index = missions.findIndex(m => m.id === parseInt(id))
  if (index !== -1) {
    const deletedMission = missions.splice(index, 1)
    res.json(deletedMission)
  } else {
    res.status(404).json({ message: 'Mission not found' })
  }
}
