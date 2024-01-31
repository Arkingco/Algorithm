function solution(d, budget) {
    let answer = 0;
    let num = 0;
    d.sort((a, b) => a - b);
    for (let i=0; i<d.length; ++i) {
        num += d[i];
        if (budget < num)
            break;
        else if (budget === num ) {
            ++answer;
            break;            
        }
        else
            ++answer;
    }
    return answer;
}