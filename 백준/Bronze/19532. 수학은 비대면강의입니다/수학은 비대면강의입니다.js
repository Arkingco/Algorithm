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
  let [a, b, c, d, e, f] = input[0].split(' ').map((e) => +e);

  for (let x = -999; x <= 999; ++x) {
    for (let y = -999; y <= 999; ++y) {
      if (a * x + b * y === c && d * x + e * y === f) {
        console.log(x, y);
      }
    }
  }
}
