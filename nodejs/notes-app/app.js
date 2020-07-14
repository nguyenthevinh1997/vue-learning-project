const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.blue.inverse.bold("Success!");
console.log(greenMsg);

console.log(process.argv[2]);
