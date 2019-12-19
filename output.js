const fs = require('fs');
const chalk = require('chalk');

const onReponse = joke => {
  console.log(chalk.green(joke));
};

const onEmptyResponse = () => {
  console.log(chalk.red('Acá no hacemos chistes con esas cosas.'));
};

const saveOnFile = joke => {
  const fileStream = fs.createWriteStream('jokes.txt', { flags: 'a' }, () => {
    fileStream.on('error', err => {
      console.log('error saving joke');
      throw err;
    });
  });
  fileStream.write(joke);
  fileStream.end('\n');
};

module.exports = { onReponse, onEmptyResponse };
