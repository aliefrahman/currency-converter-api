/*
* Here we define the routes for the currency conversion API.
* The currencyRoutes.js file imports the currencyController.js file and defines the route for currency conversion.
* The currencyController.js file imports the currencyService.js file and defines the logic for currency conversion.
* Author: Aliefrahman
* File:   currencyRoutes.js
* Date: 02/02/2025
*/

import express from 'express';
import CurrencyController from '../controllers/currencyController.js';
import CurrencyService from '../services/currencyService.js';

const router = express.Router();
const currencyService = new CurrencyService();
const currencyController = new CurrencyController(currencyService);

router.post('/convert', (req, res) => currencyController.convertCurrency(req, res));

export default router;