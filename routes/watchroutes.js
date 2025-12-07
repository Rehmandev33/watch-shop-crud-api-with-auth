import express from 'express';
import { getWatches, getWatchById, createWatch, updateWatch, deleteWatch } from '../controllers/watchcontroller.js';
import { protect } from '../middleware/authmiddle.js';

const router = express.Router();

router.get('/', getWatches);
router.get('/:id', getWatchById);

// Protected Routes (Need Token)
router.post('/', protect, createWatch);
router.put('/:id', protect, updateWatch);
router.delete('/:id', protect, deleteWatch);

export default router;