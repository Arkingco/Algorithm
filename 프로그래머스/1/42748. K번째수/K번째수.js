function solution(array, commands) {
    const answer = [];
    for (let a=0; a<commands.length; ++a) {
        const [i, j, k] = commands[a];
        const result = (array.slice(i - 1, j).sort((a, b) => a - b))[k - 1] ;
        answer.push(result);
    }
    return answer;
}