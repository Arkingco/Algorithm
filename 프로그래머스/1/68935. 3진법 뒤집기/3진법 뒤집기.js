function solution(n) {
    var arr = [];
    let answer = 0;
    var div = 3, b = 0;
    while (n) {
        if (n > div);
        arr.push((n % div));
        n = Math.floor(n / div);
    }
    for (let i=arr.length - 1; i >= 0; --i) {
        answer += arr[arr.length - i - 1] * (div ** i);
    }
    return answer;
}