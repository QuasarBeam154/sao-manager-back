import { Request, Response } from 'express'

interface Shop {
  id: number
  name: string
  description: string
  locationId: number
}

let shops: Shop[] = [
  { id: 1, name: 'Blacksmith', description: 'Shop for buying and selling weapons and armor', locationId: 1 },
  { id: 2, name: 'Magic Emporium', description: 'Shop for buying and selling magical items', locationId: 2 },
]

export const getShops = (req: Request, res: Response) => {
  res.json(shops)
}

export const createShop = (req: Request, res: Response) => {
  const newShop: Shop = req.body
  newShop.id = shops.length + 1
  shops.push(newShop)
  res.status(201).json(newShop)
}

export const updateShop = (req: Request, res: Response) => {
  const { id } = req.params
  const index = shops.findIndex(s => s.id === parseInt(id))
  if (index !== -1) {
    shops[index] = { ...shops[index], ...req.body }
    res.json(shops[index])
  } else {
    res.status(404).json({ message: 'Shop not found' })
  }
}

export const deleteShop = (req: Request, res: Response) => {
  const { id } = req.params
  const index = shops.findIndex(s => s.id === parseInt(id))
  if (index !== -1) {
    const deletedShop = shops.splice(index, 1)
    res.json(deletedShop)
  } else {
    res.status(404).json({ message: 'Shop not found' })
  }
}
