/* eslint-disable no-console 
* Author: Aliefrahman
* File:   app.js
* Date: 02/02/2025
*/ 

import express from 'express';
import { config } from './config/config.js';
import currencyRoutes from './routes/currencyRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/currency', currencyRoutes);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});