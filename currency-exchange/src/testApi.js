const axios = require('axios');

const API_URL = 'https://api.apyhub.com/data/convert/currency/multiple';
const API_KEY = 'APY01Z9EpaGQ2sXcWjVFcN6ngmW2fy6YS0UYNBrHnltLupR9JisezF61rlE7evKeKp';
async function testApi() {
    try {
        const response = await axios.post(API_URL, {
            source: 'USD',
            targets: ['EUR']
        }, {
            headers: {
                'Content-Type': 'application/json',
                'apy-token': API_KEY
            }
        });
        console.log(response.data);
    } catch (error) {
        if (error.response) {
            console.error('API Response Error:', error.response.data);
        } else if (error.request) {
            console.error('API Request Error:', error.request);
        } else {
            console.error('General Error:', error.message);
        }
    }
}

testApi();