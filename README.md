<!-- Much thanks to https://github.com/othneildrew/Best-README-Template for the template -->
<!-- And to https://github.com/alexandresanlim/Badges4-README.md-Profile for the badges -->

# Currency Exchange API

## Overview

This project provides a simple RESTful API to fetch currency exchange rates using a public currency conversion API. The application is implemented using Node.js and includes caching to reduce the number of requests to the external API.

<details>
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#libraries-and-dependencies">Libraries and Dependencies</a></li>
    <li><a href="#environment-variables">Environment Variables</a></li>
    <li><a href="#setup-and-run">Setup and Run</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#caching-implementation">Caching Implementation</a></li>
    <li><a href="#swagger-documentation">Swagger Documentation</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

## Features
- Fetch current exchange rates for specified currencies.
- Caching to reduce external API requests and improve performance.

## Libraries and Dependencies
- express
- axios
- node-cache
- swagger-jsdoc
- swagger-ui-express

```sh
npm install express axios node-cache swagger-jsdoc swagger-ui-express
```
## Environment Variables
```sh
API_KEY="YourApyHubAPIKey"
```
## Setup and Run 
Prerequisites
1. Node.js (v14 or higher)
2. npm (Node Package Manager)
2. Git

## Installation

1. Clone the Repo
```bash
git clone https://github.com/habibayasserr/Currency-Exchange-API.git
cd currency-exchange-api
```
2. Install Dependencies
The node_modules folder is not included in the repository. You will need to install the project dependencies using npm:
```bash
npm install
```
3. Running the Application
Open your browser or use a tool like Postman to test the API endpoint:

```http
GET http://localhost:3000/api/exchange-rate?from=USD&to=EUR,GBP,JPY
```
Or you could just paste the link in your browser

## API Endpoints 
<b>Request</b>
```http
GET /api/exchange-rate
```
<h3>Parameters</h3>
<ul>
  <li><b>from:</b> The base currency (required)</li>
  <li><b>to:</b> The target currencies, comma-separated (required)</li>
</ul>

<b>Example</b>
```http
GET /api/exchange-rate?from=USD&to=EUR,GBP,JPY
```
<b>Response</b> 
```json
{
  "usd_eur": 0.93499247,
  "usd_gbp": 0.79076659,
  "usd_jpy": 159.77158723
}
```
## Caching Implementation

Caching is implemented to reduce the number of requests to the external API, which helps in improving the performance and efficiency of the application. The caching mechanism stores the exchange rates for a specified period (1 hour by default) and serves the cached data for subsequent requests within this period.

<h3>How Caching is Implemented</h3>
<ul>
  <li><b>Library Used:</b> `node-cache`</li>
  <li><b>Cache Duration:</b> 1 hour (3600 seconds)</li>
</ul>

<b> Reminder </b>
Remember to set your API_KEY in the currencyService.js file to ensure the application can access the external API.

<b>Running the Application with Caching</b>

1. Start the server:
   ```sh
   npm start
   ```
2. Make a request to the API
```http
GET http://localhost:3000/api/exchange-rate?from=USD&to=EUR,GBP,JPY
```

3. Chech the server logs in your console:
   <ul>
  <li>For the first request, you should see a log message: <b>Fetching new rates and caching them</b>.</li>
  <li>For subsequent requests within the cache duration, you should see a log message: <b>Returning cached rates</b>.</li>
</ul>

## Swagger Documentation
API documentation is available at /api-docs when the server is running. You can access it by navigating to:

```http
http://localhost:3000/api-docs
```
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
