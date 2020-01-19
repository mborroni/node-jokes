const { getMostPopularJoke } = require('./leaderboard');
const { searchJokes } = require('./api');

function inputHandler(input) {
  if (input === 'leaderboard') {
    getMostPopularJoke();
    return;
  }

  searchJokes(input);
}

module.exports = { inputHandler };
