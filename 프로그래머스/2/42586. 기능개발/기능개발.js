function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length !== 0) {
        for(let i=0; i<progresses.length; ++i ) 
            progresses[i] += speeds[i];

        let count = 0;
        for(let i=0; i<progresses.length; ++i) {
            if (progresses[i] >= 100) 
                count++;
            else 
                break;
        }
        for(let i=0; i<count; ++i) {
            progresses.shift();
            speeds.shift();
        } 
        if (count !== 0) answer.push(count);
        
    }
    return answer;
}