// src/config/config.js
import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    apiKey: process.env.FREECURRENCY_API_KEY,
    apiUrl: 'https://api.freecurrencyapi.com/v1'
};