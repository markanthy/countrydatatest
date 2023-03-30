const axios = require('axios');

module.exports = async function (context, req) {
  const API_KEY = process.env.API_KEY;
  const API_HOST = process.env.API_HOST;

  // Use the API_KEY and API_HOST to make a request to the API
  const response = await axios.get('https://rest-country-api.p.rapidapi.com/USA', {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  });
  const data = response.data;

  context.res = {
    // Set the response body and status code
    body: data,
    status: response.status,
  };
};