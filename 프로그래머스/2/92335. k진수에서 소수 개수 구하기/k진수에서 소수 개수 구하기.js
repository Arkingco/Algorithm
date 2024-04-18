function solution(n, k) {
    let answer = 0;
    n.toString(k).split('0').forEach((e, i) => {
        let number = Number(e);
        if (number <= 1) return ;
        if (number === 2) {
            answer++;
            return;
        }
        for(let i=2; i<Math.sqrt(number) + 1; ++i) {
            if (number % i === 0) {
                return ;
            } 
        };
        answer++;
    })
    return answer;
}