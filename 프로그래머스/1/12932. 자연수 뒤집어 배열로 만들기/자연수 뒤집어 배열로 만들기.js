function solution(n) {
    return n.toString().split("").reverse().map((curr) => parseInt(curr));
}