import express from 'express';
import CurrencyController from '../controllers/currencyController.js';
import CurrencyService from '../services/currencyService.js';

const router = express.Router();
const currencyService = new CurrencyService();
const currencyController = new CurrencyController(currencyService);

router.post('/convert', (req, res) => currencyController.convertCurrency(req, res));

export default router;