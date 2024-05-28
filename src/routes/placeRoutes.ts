import express from 'express'
import { createPlace, deletePlace, getPlaces, updatePlace } from '../controllers/placeController'

const router = express.Router()

router.get('/places', getPlaces)
router.post('/places', createPlace)
router.put('/places/:id', updatePlace)
router.delete('/places/:id', deletePlace)

export default router
