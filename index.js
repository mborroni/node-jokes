const { getKeyword } = require('./input');
const { searchJokes } = require('./api');

getKeyword(searchJokes);
