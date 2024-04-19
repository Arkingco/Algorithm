const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let [n, m] = input[0].split(' ').map((e) => +e);
  let arr1 = [];
  let arr2 = [];
  let i = 0;
  for (i; i < n; ++i) {
    arr1.push(input[i + 1].split(' ').map((e) => +e));
  }
  for (i; i < n + n; ++i) {
    arr2.push(input[i + 1].split(' ').map((e) => +e));
  }
  solution(n, m, arr1, arr2);
  process.exit();
});

function solution(n, m, arr1, arr2) {
  let answer = '';
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      answer += arr1[i][j] + arr2[i][j] + ' ';
    }
    answer += '\n';
  }
  console.log(answer.trim());
}
