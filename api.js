const request = require('request');
const { parseJokes, saveOnFile, jokeNotFound, jokeFound } = require('./output');

function _returnJokes(err, response, body) {
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
}

function searchJokes(keyword) {
  const options = {
    url: `https://icanhazdadjoke.com/search?term=${keyword}`,
    headers: {
      Accept: 'application/json'
    }
  };
  request(options, _returnJokes);
}

module.exports = { searchJokes };
