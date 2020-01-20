const fs = require('fs');
const { printMostPopularJoke } = require('./output');

function getMostPopularJoke() {
  fs.readFile('jokes.txt', 'utf8', (err, data) => {
    const jokes = data.split('\n\n');

    const jokesCounter = _countJokes(jokes);

    const joke = _filterMostPopularJoke(jokesCounter);
    if (joke === null) {
      const randomJoke = _getRandomJoke(jokesCounter);
      printMostPopularJoke(randomJoke);
      return;
    }
    printMostPopularJoke(joke);
    return;
  });
}

function _countJokes(jokes) {
  const jokesMap = new Map();
  jokes.forEach(joke => {
    if (!jokesMap.has(joke)) {
      jokesMap.set(joke, 1);
    } else {
      let counter = jokesMap.get(joke);
      counter++;
      jokesMap.set(joke, counter);
    }
  });

  return jokesMap;
}

function _filterMostPopularJoke(jokes) {
  const majorNumberOfOccurrences = Math.max.apply(null, [...jokes.values()]);

  const filteredJokes = [...jokes.entries()].filter(joke => {
    const [, counter] = joke;
    return counter === majorNumberOfOccurrences;
  });

  if (filteredJokes.length > 1) {
    return null;
  }

  const [joke] = filteredJokes[0];
  return joke;
}

function _getRandomJoke(jokes) {
  const randomIndex = _getRandomIndex(jokes.size);
  const randomJoke = [...jokes.keys()][randomIndex];
  return randomJoke;
}

function _getRandomIndex(size) {
  return Math.floor(Math.random() * size);
}

module.exports = { getMostPopularJoke };
