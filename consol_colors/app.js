var readline = require('readline');
var colors = require('colors');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What do you think of Node.js?".green, function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:".blue, answer);

  rl.close();
});