function solution(n, arr1, arr2) {
    const answer = [];
    for (let i=0; i<arr1.length; ++i) {
        const strTo2 = (arr1[i] | arr2[i]).toString(2).split('');
        const str = strTo2.map((data, index) => {
            if (data === '0') return ' ';
            else
                return '#';
        }).join('');
        let line = " ".repeat(arr1.length - str.length) + str;
        answer.push(line);
    }
    return answer;
}