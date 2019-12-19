const fs = require('fs');
const chalk = require('chalk');

const onReponse = joke => {
  console.log(chalk.green(joke));
};

const onEmptyResponse = () => {
  console.log(chalk.red('Acá no hacemos chistes con esas cosas.'));
};

const parseJokes = resultJokes => {
  return resultJokes.map(aJoke => aJoke.joke);
};

const saveOnFile = joke => {
  const fileStream = fs.createWriteStream('jokes.txt', { flags: 'a' }, () => {
    fileStream.on('error', err => {
      console.error('error saving joke');
      throw err;
    });
  });
  fileStream.write(joke);
  fileStream.end('\n\n');
};

module.exports = { onReponse, onEmptyResponse, parseJokes, saveOnFile };
