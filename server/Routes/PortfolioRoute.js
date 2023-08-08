import express from "express";
import { adduser, getPortfolios } from "../Controllers/PortfolioController.js";
const router = express.Router()

router.get('/portfolios', getPortfolios)

export default router