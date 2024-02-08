function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a,b) => b - a);
    let index = 0;
    while (index + m - 1 <= score.length - 1) {
        index = index + m - 1;
        answer += score[index] * m 
        index += 1;
    }
    return answer;
}