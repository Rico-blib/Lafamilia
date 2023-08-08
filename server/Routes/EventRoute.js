import express from 'express';
import { deleteNotice, getNotice, postNotice } from '../Controllers/EventController.js';

const router = express.Router();

router.post('/',postNotice)
router.get('/',getNotice)
router.delete('/:id',deleteNotice)

export default router