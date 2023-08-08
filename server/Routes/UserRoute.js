import express from  "express";
import { deleteUser, getPortfolios, getUser, updateUser } from "../Controllers/UserController.js";

const router = express.Router();

router.get('/:id', getUser)
router.get('/portfolios', getPortfolios)
router.put('/:id', updateUser)
router.delete('/:id',deleteUser)
export default router;