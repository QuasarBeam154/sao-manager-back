import express from 'express'
import { createFriend, deleteFriend, getFriends, updateFriend } from '../controllers/friendController'

const router = express.Router()

router.get('/friends', getFriends)
router.post('/friends', createFriend)
router.put('/friends/:id', updateFriend)
router.delete('/friends/:id', deleteFriend)

export default router
