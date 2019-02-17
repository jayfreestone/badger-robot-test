const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');
const simulation = require('./src/simulation');

console.log(simulation(input));
