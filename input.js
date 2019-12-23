const prompt = require('prompt');

const keywordSchema = {
  properties: {
    keyword: {
      type: 'string',
      required: true
    }
  }
};

const getKeyword = callback => {
  prompt.get(keywordSchema, (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }

    callback(res.keyword);
  });
};

module.exports = { getKeyword };
