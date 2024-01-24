function solution(s) {
    var arr = s.split(' ').map((i) => parseInt(i));    
    arr.sort((a, b) => a - b);
    return Math.min(...arr) + ' ' + Math.max(...arr);
}