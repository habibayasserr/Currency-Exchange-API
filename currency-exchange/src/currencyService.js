const axios = require('axios');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600 });
const API_URL = 'https://api.apyhub.com/data/convert/currency/multiple';
const API_KEY = 'APY01Z9EpaGQ2sXcWjVFcN6ngmW2fy6YS0UYNBrHnltLupR9JisezF61rlE7evKeKp';

async function getExchangeRates(fromCurrency, toCurrencies) {
    try {
        const cacheKey = `${fromCurrency}_${toCurrencies.join(',')}`;
        const cachedRates = cache.get(cacheKey);
        if (cachedRates) {
            console.log('Returning cached rates');
            return cachedRates;
        }

        const response = await axios.post(API_URL, {
            source: fromCurrency,
            targets: toCurrencies
        }, {
            headers: {
                'Content-Type': 'application/json',
                'apy-token': API_KEY
            }
        });

        const rates = toCurrencies.reduce((acc, curr) => {
            acc[`${fromCurrency.toLowerCase()}_${curr.toLowerCase()}`] = response.data[`${fromCurrency.toLowerCase()}_${curr.toLowerCase()}`];
            return acc;
        }, {});

        cache.set(cacheKey, rates);
        console.log('Fetching new rates and caching them');
        return rates;
    } catch (error) {
        if (error.response) {
            console.error('API Response Error:', error.response.data);
        } else if (error.request) {
            console.error('API Request Error:', error.request);
        } else {
            console.error('General Error:', error.message);
        }
        throw new Error('Error fetching exchange rates');
    }
}

module.exports = { getExchangeRates };