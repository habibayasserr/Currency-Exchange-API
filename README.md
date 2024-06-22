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
    <li><a href="#license">License</a></li>
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

sh
npm install express axios node-cache swagger-jsdoc swagger-ui-express

## Environment Variables
sh
API_KEY="YourApyHubAPIKey"

## Setup and Run 
Prerequisites
1. Node.js (v14 or higher)
2. npm (Node Package Manager)
2. Git

### Installation

1. Clone the Repo
bash
git clone https://github.com/habibayasserr/Currency-Exchange-API.git
cd currency-exchange-api
