function solution(n) {
    var answer = '';
    return Array(n).fill('').map((item, i) => {
        if (i % 2 == 0)
            return '수';
        else
            return '박';
    }).join('');
}