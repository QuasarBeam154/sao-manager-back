import { Request, Response } from 'express'

interface Character {
  id: number
  name: string
  level: number
  race: string
  class: string
  health: number
  mana: number
  playerId: number
  guildId: number
}

let characters: Character[] = [
  { id: 1, name: 'Kirito', level: 100, race: 'Human', class: 'Swordsman', health: 1000, mana: 500, playerId: 1, guildId: 1 },
  { id: 2, name: 'Asuna', level: 95, race: 'Human', class: 'Healer', health: 800, mana: 800, playerId: 2, guildId: 1 },
]

export const getCharacters = (req: Request, res: Response) => {
  res.json(characters)
}

export const createCharacter = (req: Request, res: Response) => {
  const newCharacter: Character = req.body
  newCharacter.id = characters.length + 1
  characters.push(newCharacter)
  res.status(201).json(newCharacter)
}

export const updateCharacter = (req: Request, res: Response) => {
  const { id } = req.params
  const index = characters.findIndex(c => c.id === parseInt(id))
  if (index !== -1) {
    characters[index] = { ...characters[index], ...req.body }
    res.json(characters[index])
  } else {
    res.status(404).json({ message: 'Character not found' })
  }
}

export const deleteCharacter = (req: Request, res: Response) => {
  const { id } = req.params
  const index = characters.findIndex(c => c.id === parseInt(id))
  if (index !== -1) {
    const deletedCharacter = characters.splice(index, 1)
    res.json(deletedCharacter)
  } else {
    res.status(404).json({ message: 'Character not found' })
  }
}
