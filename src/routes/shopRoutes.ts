import express from 'express';
import { createShop, deleteShop, getShops, updateShop } from '../controllers/shopController';

const router = express.Router();

router.get('/shops', getShops);
router.post('/shops', createShop);
router.put('/shops/:id', updateShop);
router.delete('/shops/:id', deleteShop);

export default router;
