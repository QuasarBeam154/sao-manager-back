import { Request, Response } from 'express'

type Friend = {
  id: number
  playerId1: number
  playerId2: number
  status: string
}

let friends: Friend[] = [
  { id: 1, playerId1: 1, playerId2: 2, status: 'active' },
  { id: 2, playerId1: 3, playerId2: 4, status: 'pending' },
]

export const getFriends = (req: Request, res: Response) => {
  res.json(friends)
}

export const createFriend = (req: Request, res: Response) => {
  const newFriend: Friend = req.body
  newFriend.id = friends.length + 1
  friends.push(newFriend)
  res.status(201).json(newFriend)
}

export const updateFriend = (req: Request, res: Response) => {
  const { id } = req.params
  const index = friends.findIndex(f => f.id === parseInt(id))
  if (index !== -1) {
    friends[index] = { ...friends[index], ...req.body }
    res.json(friends[index])
  } else {
    res.status(404).json({ message: 'Friend not found' })
  }
}

export const deleteFriend = (req: Request, res: Response) => {
  const { id } = req.params
  const index = friends.findIndex(f => f.id === parseInt(id))
  if (index !== -1) {
    const deletedFriend = friends.splice(index, 1)
    res.json(deletedFriend)
  } else {
    res.status(404).json({ message: 'Friend not found' })
  }
}
