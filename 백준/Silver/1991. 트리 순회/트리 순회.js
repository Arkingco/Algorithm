const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});


let input = [];
let answer = '';
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input); 
    process.exit();  
});

function 전위(tree, current) {
    if (current === '.') return;
    let [left, right] = tree[current];
    answer += current;
    전위(tree, left);
    전위(tree, right);
};
function 중위(tree, current) {
    if (current === '.') return;
    let [left, right] = tree[current];
    중위(tree, left);
    answer += current;
    중위(tree, right);

};
function 후위(tree, current) {
    if (current === '.') return;
    let [left, right] = tree[current];
    후위(tree, left);
    후위(tree, right);
    answer += current;
};

function solution () {
    let n = +input[0];
    let tree = {};
    
    input.shift();
    for(let i=0; i<n; ++i ) {
        let [ node, left, right ] = input[i].split(' ');
        tree[node] = [left, right];
    }
    전위(tree, 'A');
    answer += '\n';
    중위(tree, 'A');
    answer += '\n';
    후위(tree, 'A');
    
    console.log(answer);
}