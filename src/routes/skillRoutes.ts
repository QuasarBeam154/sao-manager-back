import { Router } from 'express'
import { createSkill, deleteSkill, getSkills, updateSkill } from '../controllers/skillController'

const router = Router()

router.get('/skills', getSkills)
router.post('/skills', createSkill)
router.put('/skills/:id', updateSkill)
router.delete('/skills/:id', deleteSkill)

export default router