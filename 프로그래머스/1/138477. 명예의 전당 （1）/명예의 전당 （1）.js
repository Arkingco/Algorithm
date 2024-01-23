function solution(k, score) {
    var answer = [];
    
    var arr = [];
    for (let i=0; i<score.length; ++i)
    {
        if (i < k)
        {
            arr.push(score[i]);
            arr.sort((a, b) => a - b);
        }
        else if (score[i] > Math.min(...arr))
        {
            arr.push(score[i]);
            arr.sort((a, b) => a - b);
            arr.shift();
        }
        answer.push(arr[0]);
    }
    
    return answer;
}