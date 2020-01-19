const { getMostPopularJoke } = require('./leaderboard');
const { searchJokes } = require('./api');

const inputHandler = input => {
  if (input === 'leaderboard') {
    getMostPopularJoke();
    return;
  }

  searchJokes(input);
};

module.exports = { inputHandler };
