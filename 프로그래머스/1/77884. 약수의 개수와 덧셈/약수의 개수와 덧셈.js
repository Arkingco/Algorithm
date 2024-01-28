function solution(left, right) {
    let answer = 0;
    for (let i=left; i<=right; ++i) {
        let arr = [];
        for (let num=1; num <= i; ++num) {
            if (i % num === 0)
                arr.push(num);
        }
        if (arr.length % 2)
            answer -= i;
        else
            answer += i;
    }
    return answer;
}