import chalk from 'chalk';
import { myContract } from './instance.js';

(async function () {
  console.log(chalk.bgBlue('Listening for Events...'));
  myContract.events.Issued().on('data', (event) => {
    console.log(chalk.bgGreen('**** EVENT OCCURED ****'));
    console.log(event);
    console.log(chalk.bgGreen('***********************'));
  });
})();
