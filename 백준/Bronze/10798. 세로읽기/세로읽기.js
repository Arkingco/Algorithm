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

function solution(arr) {
  let answer = '';
  let n = arr.length;
  let m = Math.max(...arr.map((e) => e.length));
  let size = Math.max(n, m);
  let list = Array(size)
    .fill()
    .map((e) => Array(size).fill(''));
  input.forEach((e1, i) => {
    input[i].split('').map((e, j) => {
      list[i][j] = input[i][j];
    });
  });
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      answer += list[j][i];
    }
  }
  console.log(answer);
}
