import express from 'express'
import { createCompetition, deleteCompetition, getCompetitions, updateCompetition } from '../controllers/competitionController'

const router = express.Router()

router.get('/competitions', getCompetitions)
router.post('/competitions', createCompetition)
router.put('/competitions/:id', updateCompetition)
router.delete('/competitions/:id', deleteCompetition)

export default router
