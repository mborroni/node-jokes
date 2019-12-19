const https = require('https');

const options = {
  headers: {
    Accept: 'application/json'
  }
};

const returnJokes = data => {
  const parsedJson = JSON.parse(data);
  return parsedJson.results;
};

const searchJokes = keyword => {
  https.get(
    `https://icanhazdadjoke.com/search?term=${keyword}`,
    options,
    response => {
      response.on('error', err => {
        console.error(err);
        throw err;
      });

      response.on('data', returnJokes);
    }
  );
};

module.exports = searchJokes;

searchJokes('hello');
