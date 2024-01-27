function solution(x) {
    const a = x.toString().split('').map((a) => parseInt(a)).reduce((sum, curr) => sum + curr);
    return x % a === 0;
}