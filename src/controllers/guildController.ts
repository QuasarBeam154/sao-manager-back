import { Request, Response } from "express"

interface Guild {
  id: number
  name: string
  description: string
  guildLeader?: number
}

let guilds: Guild[] = [
  { id: 1, name: "Os Bagual", description: "Um por todos, todos por um", guildLeader: 3 },
  { id: 1, name: "Asiaticas fodas 2006", description: "Olho por olho, dente por dente", guildLeader: 1 },
]

export const getGuilds = (req: Request, res: Response) => {
  res.json(guilds)
}

export const createGuild = (req: Request, res: Response) => {
  const newGuild: Guild = req.body
  guilds.push({ ...newGuild, id: guilds.length + 1 })
  res.status(201).json(newGuild)
}

export const updateGuild = (req: Request, res: Response) => {
  const { id } = req.params
  const index = guilds.findIndex(g => g.id === parseInt(id))
  if (index >= 0) {
    guilds[index] = { ...guilds[index], ...req.body }
    res.json(guilds[index])
  } else {
    res.status(404).json({ message: 'Guild not found' })
  }
}

export const deleteGuild = (req: Request, res: Response) => {
  const { id } = req.params
  guilds = guilds.filter(g => g.id !== parseInt(id))
  res.status(204).send()
}
