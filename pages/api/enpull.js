module.exports = async function (context, req) {
    const API_KEY = process.env.API_KEY;
    const API_HOST = process.env.API_HOST;
  
    // Use the API_KEY and API_HOST to make a request to the API
    // ...
  
    context.res = {
      // Set the response body and status code
      body: ...,
      status: ...,
    };
  };