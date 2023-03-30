const axios = require('axios');


export default async function handler(req, res) {
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
  
    res.status(response.status).json(data);
  }