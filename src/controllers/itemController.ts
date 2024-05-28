import { Request, Response } from 'express'

interface Item {
  id: number
  name: string
  type: string
  rarity: string
  effect: string
  bonus: string
  price: number
}

let items: Item[] = [
  { id: 1, name: 'Health Potion', type: 'Consumable', rarity: 'Common', effect: 'Restore 50 HP', bonus: '', price: 10 },
  { id: 2, name: 'Sword of Legends', type: 'Weapon', rarity: 'Legendary', effect: 'Increased attack power', bonus: '10% critical hit chance', price: 1000 },
]

export const getItems = (req: Request, res: Response) => {
  res.json(items)
}

export const createItem = (req: Request, res: Response) => {
  const newItem: Item = req.body
  newItem.id = items.length + 1
  items.push(newItem)
  res.status(201).json(newItem)
}

export const updateItem = (req: Request, res: Response) => {
  const { id } = req.params
  const index = items.findIndex(i => i.id === parseInt(id))
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body }
    res.json(items[index])
  } else {
    res.status(404).json({ message: 'Item not found' })
  }
}

export const deleteItem = (req: Request, res: Response) => {
  const { id } = req.params
  const index = items.findIndex(i => i.id === parseInt(id))
  if (index !== -1) {
    const deletedItem = items.splice(index, 1)
    res.json(deletedItem)
  } else {
    res.status(404).json({ message: 'Ranking not found' })
  }
}
