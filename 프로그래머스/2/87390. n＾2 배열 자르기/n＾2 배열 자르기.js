
function solution(n, left, right) {
    const answer = [];
    for (left; left <= right; ++left) {
        const m = Math.floor(left / n);
        const na = left % n;
        
        answer.push( m >= na ? m + 1 : ( m + 1 )+ (na - m) );
    }
    
    return answer;
}