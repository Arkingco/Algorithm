function solution(x, n) {
    const answer = [];
    let plus = x;
    for (var i=0; i<n; ++i) {
        answer.push(plus);
        plus += x;
    }
    return answer;
}