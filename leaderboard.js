const fs = require('fs');
const { printMostPopularJoke } = require('./output');

function getMostPopularJoke() {
  fs.readFile('jokes.txt', 'utf8', (err, data) => {
    const jokes = data.split('\n\n');

    const jokesCounter = _countJokes(jokes);

    if (_mostPopularJokeExists(jokesCounter)) {
      const joke = _getJoke(jokesCounter);
      printMostPopularJoke(joke);
      return;
    }
    const joke = _getRandomJoke(jokesCounter);
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

function _mostPopularJokeExists(jokes) {
  const majorNumberOfOccurrences = Math.max.apply(null, [...jokes.values()]);
  const totalOccurrences = [...jokes.values()].filter(
    counter => counter === majorNumberOfOccurrences
  ).length;
  if (totalOccurrences > 1) {
    return false;
  }
  return true;
}

function _getJoke(jokes) {
  const sortedJokes = _sortJokes([...jokes]);
  const [joke] = sortedJokes[0];
  return joke;
}

function _sortJokes(array) {
  return array.sort((elementA, elementB) => elementB[1] - elementA[1]);
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
