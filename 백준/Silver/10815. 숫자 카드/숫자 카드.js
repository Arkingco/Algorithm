const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(input) {
  let answer = '';
  let visited = new Set();
  input[1].split(' ').forEach((e) => {
    visited.add(e);
  });
  input[3].split(' ').forEach((e) => {
    if (visited.has(e)) {
      answer += '1 ';
    } else {
      answer += '0 ';
    }
  });
  console.log(answer);
}
