function solution(s) {

    return Number.isInteger(Number(s)) && (s.length === 4 || s.length === 6) && s.indexOf('e') === -1;
}