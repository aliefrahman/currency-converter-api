/* 
* CurrencyController class
* This class is responsible for handling the requests and responses related to currency conversion.
* Author: Aliefrahman
* File:   currencyController.js
* Date: 02/02/2025
*/
class CurrencyController {
    constructor(currencyService) {
        this.currencyService = currencyService;
    }

    async convertCurrency(req, res) {
        const { from, to, amount } = req.body;
        try {
            const result = await this.currencyService.convert(from, to, amount);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default CurrencyController;