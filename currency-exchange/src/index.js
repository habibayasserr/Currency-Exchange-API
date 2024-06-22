const express = require('express');
const currencyController = require('./currencyController');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Currency Exchange API',
            version: '1.0.0',
            description: 'A simple API to get currency exchange rates'
        },
    },
    apis: ['./src/index.js'], // path where API specification is written
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /exchange-rate:
 *   get:
 *     summary: Get exchange rate
 *     parameters:
 *       - name: from
 *         in: query
 *         description: Base currency
 *         required: true
 *         type: string
 *       - name: to
 *         in: query
 *         description: Target currency
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Missing parameters
 *       404:
 *         description: Rate not found
 *       500:
 *         description: Error fetching data
 */
app.use('/api', currencyController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});