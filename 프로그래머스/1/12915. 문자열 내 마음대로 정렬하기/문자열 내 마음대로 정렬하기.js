function solution(strings, n) {
    var answer = [];
    
    for (let i=97; i<=122; ++i) {
        const arr = [];
        for (let j=0; j<strings.length; ++j) {
            if(strings[j][n].charCodeAt() === i)
                arr.push(strings[j]);
        }
        if (arr.length !== 0) {
            arr.sort();
            for (let j=0; j<arr.length; ++j) {
                answer.push(arr[j]);
            }
        }
    }
    return answer;
}