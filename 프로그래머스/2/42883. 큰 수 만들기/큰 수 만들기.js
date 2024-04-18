function solution(number, k) {
    
    var answer = [];
    for(let i=0; i<number.length; ++i ) {
        while(k > 0 && answer[answer.length - 1] < number[i]) {
            answer.pop();
            k--;
        }
        answer.push(number[i]);
    }
    answer.splice(answer.length - k, k);
    return answer.join('');
}