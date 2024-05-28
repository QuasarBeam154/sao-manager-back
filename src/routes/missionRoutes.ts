import express from 'express'
import { createMission, deleteMission, getMissions, updateMission } from '../controllers/missionController'

const router = express.Router()

router.get('/missions', getMissions)
router.post('/missions', createMission)
router.put('/missions/:id', updateMission)
router.delete('/missions/:id', deleteMission)

export default router