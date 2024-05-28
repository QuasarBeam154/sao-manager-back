import { Request, Response } from 'express'

type Event = {
  id: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  locationId: number
}

let events: Event[] = [
  { id: 1, name: 'Sword Art Online Launch Event', description: 'Grand event celebrating the launch of SAO', startDate: new Date('2023-11-06'), endDate: new Date('2023-11-10'), locationId: 1 },
  { id: 2, name: 'Boss Raid Event', description: 'Join forces to defeat powerful bosses', startDate: new Date('2023-12-01'), endDate: new Date('2023-12-05'), locationId: 2 },
]

export const getEvents = (req: Request, res: Response) => {
  res.json(events)
}

export const createEvent = (req: Request, res: Response) => {
  const newEvent: Event = req.body
  newEvent.id = events.length + 1
  events.push(newEvent)
  res.status(201).json(newEvent)
}

export const updateEvent = (req: Request, res: Response) => {
  const { id } = req.params
  const index = events.findIndex(e => e.id === parseInt(id))
  if (index !== -1) {
    events[index] = { ...events[index], ...req.body }
    res.json(events[index])
  } else {
    res.status(404).json({ message: 'Event not found' })
  }
}

export const deleteEvent = (req: Request, res: Response) => {
  const { id } = req.params
  const index = events.findIndex(e => e.id === parseInt(id))
  if (index !== -1) {
    const deletedEvent = events.splice(index, 1)
    res.json(deletedEvent)
  } else {
    res.status(404).json({ message: 'Event not found' })
  }
}
