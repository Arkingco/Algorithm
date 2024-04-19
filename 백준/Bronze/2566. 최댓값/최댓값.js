const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let y,
    x,
    answer = -1;
  input.map((e1, i) =>
    e1.split(' ').map((e, j) => {
      let num = +e;
      if (num > answer) {
        y = i;
        x = j;
        answer = num;
      }
    }),
  );
  solution(y, x, answer);
  process.exit();
});

function solution(y, x, answer) {
  console.log(`${answer}\n${y + 1} ${x + 1}`);
}
