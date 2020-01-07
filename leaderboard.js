const fs = require('fs');
const { printMostPopularJoke } = require('./output');

const getMostPopularJoke = () => {
  fs.readFile('jokes.txt', 'utf8', (err, data) => {
    const jokes = data.split('\n\n');

    const jokesMap = new Map();
    jokes.forEach(joke => {
      if (jokesMap.has(joke)) {
        jokesMap[joke]++;
      } else {
        jokesMap.set(joke, 1);
      }
    });

    randomIndex = getRandomIndex(jokesMap.size);
    printMostPopularJoke([...jokesMap.keys()][randomIndex]);

    //const mostPopularJoke = [...jokesMap.entries()]; //todo: find max value
    //printMostPopularJoke(mostPopularJoke);
  });
};

const getRandomIndex = size => {
  return Math.floor(Math.random() * size);
};

module.exports = { getMostPopularJoke };
