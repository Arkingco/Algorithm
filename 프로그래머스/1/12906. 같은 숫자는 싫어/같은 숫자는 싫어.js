function solution(arr)
{
    const answer = [];
    if (arr.length !== 0)
        answer.push(arr[0]);
    for (let i=1; i<arr.length; ++i) {
        if (arr[i - 1] === arr[i]) {
            continue;
        }
        else {
            answer.push(arr[i])
        }
    }
    return answer;
}