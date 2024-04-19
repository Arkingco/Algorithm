const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input = input.map((item) => +item);
  solution(input[0]);
  process.exit();
});

function solution(input) {
  console.log(1);
  console.log(0);
}
