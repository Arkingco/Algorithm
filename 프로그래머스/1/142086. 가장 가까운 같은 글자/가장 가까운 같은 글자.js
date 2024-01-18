function solution(s) {
    var answer = [];
    
    for (var i=0; i<s.length; ++i) {
        var beforeLength = answer.length;
        for (var j=i; j >= 0; --j) {
            if (s[i] === s[j] && i != j) {
                answer.push(i - j);
                break;
            }
        }
        if (answer.length === beforeLength) answer.push(-1);
    }

    return answer;
    
}