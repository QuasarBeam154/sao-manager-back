import { Router } from 'express'
import { getCharacters, createCharacter, updateCharacter, deleteCharacter } from '../controllers/charController'

const router = Router()

router.get('/characters', getCharacters)
router.post('/characters', createCharacter)
router.put('/characters/:id', updateCharacter)
router.delete('/characters/:id', deleteCharacter)

export default router
