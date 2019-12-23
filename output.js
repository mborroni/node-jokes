const fs = require('fs');
const chalk = require('chalk');

const jokeFound = joke => {
  console.log(chalk.green(joke));
};

const jokeNotFound = () => {
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
  fileStream.write(joke + '\n\n');
  fileStream.end();
};

module.exports = { jokeFound, jokeNotFound, parseJokes, saveOnFile };
