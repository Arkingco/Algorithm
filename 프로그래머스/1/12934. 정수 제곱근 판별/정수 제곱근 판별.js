function solution(n) {
    const sqrtN = Math.sqrt(n);
    return sqrtN === Math.round(sqrtN) ? (sqrtN + 1) * (sqrtN + 1) : -1;
}