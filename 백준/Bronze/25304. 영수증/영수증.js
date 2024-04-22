const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});


let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input); 
    process.exit();  
});

function solution () {
    let X = +input[0];
    let N = +input[1];
    input.shift()
    input.shift()
    let answer = 0;
    for(let i=0; i<N; ++i) {
        [a, count] = input[i].split(' ').map(e => +e);
        answer += a * count;
    }
    console.log(answer === X ? 'Yes' : 'No');
}