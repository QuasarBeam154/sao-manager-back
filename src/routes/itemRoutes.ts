import express from 'express';
import { createItem, deleteItem, getItems, updateItem } from '../controllers/itemController';

const router = express.Router();

router.get('/items', getItems);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

export default router;
