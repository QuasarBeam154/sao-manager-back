import { Router } from 'express'
import { getGuilds, createGuild, updateGuild, deleteGuild } from '../controllers/guildController'

const router = Router()

router.get('/guilds', getGuilds)
router.post('/guilds', createGuild)
router.put('/guilds/:id', updateGuild)
router.delete('/guilds/:id', deleteGuild)

export default router