const https = require('https');
const { parseJokes, saveOnFile, jokeNotFound, jokeFound } = require('./output');

const options = {
  headers: {
    Accept: 'application/json'
  }
};

const returnJokes = data => {
  const jokes = JSON.parse(data);
  const parsedJokes = parseJokes(jokes.results);
  if (!parsedJokes.length) {
    jokeNotFound();
    return;
  }
  parsedJokes.forEach(joke => {
    saveOnFile(joke);
    jokeFound(joke);
  });
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

module.exports = { searchJokes };
