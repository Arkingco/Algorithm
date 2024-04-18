function solution(n) {
    var answer = 0;
    let arr = [];
    
    for(let i=n; i>=0; --i) {
        let sum = arr.reduce((total, e) => total + e, 0);
        if (sum > n) {  
            arr.shift();         
        }
        else if (sum === n) {    
            arr.shift();
            answer++;
        }
        arr.push(i);
    }
    
    // 본인 포함
    // 0과 1은 포함하면안됨
    return answer;
}