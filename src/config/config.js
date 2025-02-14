/* src/config/config.js 
*  This file contains the configuration for the application.
*  The configuration includes the port number, the API key, and the API URL.
*  Author: Aliefrahman
*  File:   config.js
*  Date: 02/02/2025
*/
import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    apiKey: process.env.FREECURRENCY_API_KEY,
    apiUrl: 'https://api.freecurrencyapi.com/v1'
};