import axios from 'axios';
import { config } from '../config/config.js';

class CurrencyService {
    async convert(from, to, amount) {
        try {
            const response = await axios.get(`${config.apiUrl}/latest`, {
                params: {
                    apikey: config.apiKey,
                    base_currency: from,
                    currencies: to
                }
            });
            const rate = response.data.data[to];
            return {
                from,
                to,
                amount,
                convertedAmount: amount * rate,
                rate
            };
        } catch (error) {
            throw new Error('Currency conversion failed');
        }
    }
}

export default CurrencyService;