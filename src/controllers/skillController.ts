import { Request, Response } from 'express'

type Skill = {
  id: number
  name: string
  type: string
  description: string
  manaCost: number
  cooldown: number
}

let skills: Skill[] = [
  { id: 1, name: 'Sword Art', type: 'Attack', description: 'Powerful sword skill', manaCost: 50, cooldown: 10 },
  { id: 2, name: 'Heal', type: 'Support', description: 'Restore HP to target', manaCost: 30, cooldown: 5 },
]

export const getSkills = (req: Request, res: Response) => {
  res.json(skills)
}

export const createSkill = (req: Request, res: Response) => {
  const newSkill: Skill = req.body
  newSkill.id = skills.length + 1
  skills.push(newSkill)
  res.status(201).json(newSkill)
}

export const updateSkill = (req: Request, res: Response) => {
  const { id } = req.params
  const index = skills.findIndex(s => s.id === parseInt(id))
  if (index !== -1) {
    skills[index] = { ...skills[index], ...req.body }
    res.json(skills[index])
  } else {
    res.status(404).json({ message: 'Skill not found' })
  }
}

export const deleteSkill = (req: Request, res: Response) => {
  const { id } = req.params
  const index = skills.findIndex(s => s.id === parseInt(id))
  if (index !== -1) {
    const deletedSkill = skills.splice(index, 1)
    res.json(deletedSkill)
  } else {
    res.status(404).json({ message: 'Skill not found' })
  }
}
