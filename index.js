import chalk from 'chalk';
import randomcolor from 'randomcolor';

const hash31 = '#'.repeat(31);
const hash5 = '#'.repeat(5);
const space21 = ' '.repeat(21);
const space7 = ' '.repeat(7);

console.log(
  chalk.hex(randomcolor({ hue: process.argv[2], luminosity: process.argv[3] }))(
    `${hash31}\n${hash31}\n${hash31}\n${hash5}${space21}${hash5}\n${hash5}${space7}${randomcolor()}${space7}${hash5}\n${hash5}${space21}${hash5}\n${hash31}\n${hash31}\n${hash31}`,
  ),
);
