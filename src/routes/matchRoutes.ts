import express from 'express'
import { createMatch, deleteMatch, getMatches, updateMatch } from '../controllers/matchController'

const router = express.Router()

router.get('/matches', getMatches)
router.post('/matches', createMatch)
router.put('/matches/:id', updateMatch)
router.delete('/matches/:id', deleteMatch)

export default router
