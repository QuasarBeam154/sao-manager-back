import { Router } from 'express'
import { createPlayer, deletePlayer, getPlayers, updatePlayer } from '../controllers/playerController'

const router = Router()

router.get('/players', getPlayers)
router.post('/players', createPlayer)
router.put('/players/:id', updatePlayer)
router.delete('/players/:id', deletePlayer)

export default router