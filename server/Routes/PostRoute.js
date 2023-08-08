import express from 'express';
import { createPost, getPosts } from '../Controllers/PostController.js';
const router = express.Router()

router.post('/', createPost)
router.get('/album', getPosts)
export default router;