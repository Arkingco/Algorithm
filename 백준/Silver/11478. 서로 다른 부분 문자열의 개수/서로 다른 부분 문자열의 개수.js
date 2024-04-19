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
  let str = input[0];
  let arr = new Set();

  for (let i = 1; i <= str.length; ++i) {
    for (let j = 0; j < str.length; ++j) {
      if (i + j <= str.length) {
        arr.add(str.slice(j, i + j));
      }
    }
  }
  console.log(arr.size);
}
