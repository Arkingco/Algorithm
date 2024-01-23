function solution(food) {
    var answer = '';
    var arr = []
    for (var i=1; i < food.length; ++i)
        arr.push(parseInt(food[i] / 2));
    for (var i=1; i<=arr.length; ++i) {
        for (var j=0; j<arr[i - 1]; ++j)
            answer += i.toString();
    }
    answer += '0';
    for (var i=arr.length; i >= 1; --i) {
        for (var j=0; j<arr[i - 1]; ++j)
            answer += i.toString();
    }
    return answer;
}