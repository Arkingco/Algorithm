function solution(n)
{
    var answer = 0;
    var i = 100000000;
    
    while(i > 0) {
        const a = Math.floor(n/i); 
        answer += a;
        n = n - a * i;
        i = i / 10;
    }
    return answer;
}