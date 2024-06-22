const express = require('express');
const { getExchangeRates } = require('./currencyService');

const router = express.Router();

router.get('/exchange-rate', async(req, res) => {
    const { from, to } = req.query;

    if (!from || !to) {
        return res.status(400).json({ error: 'Missing from or to currency parameter' });
    }

    const toCurrencies = to.split(',');

    try {
        const rates = await getExchangeRates(from, toCurrencies);

        if (!rates || Object.keys(rates).length === 0) {
            return res.status(404).json({ error: 'Exchange rates not found' });
        }

        res.json(rates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;