import express from 'express';
import { createRanking, deleteRanking, getRankings, updateRanking } from '../controllers/rankingController';

const router = express.Router();

router.get('/rankings', getRankings);
router.post('/rankings', createRanking);
router.put('/rankings/:id', updateRanking);
router.delete('/rankings/:id', deleteRanking);

export default router;
