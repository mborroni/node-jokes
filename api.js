const request = require('request');
const { getMostPopularJoke } = require('./leaderboard');
const { parseJokes, saveOnFile, jokeNotFound, jokeFound } = require('./output');

const returnJokes = (err, response, body) => {
  const json = JSON.parse(body);
  const parsedJokes = parseJokes(json.results);
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
  const options = {
    url: `https://icanhazdadjoke.com/search?term=${keyword}`,
    headers: {
      Accept: 'application/json'
    }
  };
  request(options, returnJokes);
};

const jokesController = input => {
  if (input === 'leaderboard') {
    getMostPopularJoke();
    return;
  }

  searchJokes(input);
};

module.exports = { jokesController };
