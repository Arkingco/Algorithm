function solution(s, n) {
    const answer = [];
    const str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ                          ";
    for (let i=0; i<s.length; ++i) {
        const index = str.indexOf(s[i]);
        answer.push(str[index + n]);        
    }
    return answer.join('')
}