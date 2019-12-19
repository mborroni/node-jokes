const prompt = require('prompt');
const { searchJokes } = require('./api');

const keywordSchema = {
  properties: {
    name: {
      type: 'string',
      message: 'Search by keyword',
      required: true
    }
  }
};

const getKeyword = callback => {
  prompt.get(keywordSchema, callback);
};

module.exports = { getKeyword };
