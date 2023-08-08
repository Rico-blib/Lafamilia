import express from 'express';
import { getHouses, registerHouse, updateHouse } from '../Controllers/HouseController.js';

const router = express.Router()
router.post('/record', registerHouse)
router.get('/record', getHouses)
router.put('/:id', updateHouse)


export default router