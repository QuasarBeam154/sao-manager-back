import express from 'express'
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/eventController'

const router = express.Router()

router.get('/events', getEvents)
router.post('/events', createEvent)
router.put('/events/:id', updateEvent)
router.delete('/events/:id', deleteEvent)

export default router
