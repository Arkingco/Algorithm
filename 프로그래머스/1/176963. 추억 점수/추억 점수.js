function solution(name, yearning, photo) {
    var answer = [];
    var nameNumber = [];
    
    for (let i=0; i<name.length; ++i) 
        nameNumber[name[i]] = yearning[i];
    for (let i=0; i<photo.length; ++i) {
        let sum = 0;
        for (let j=0; j<photo[i].length; ++j) {
            if(name.includes(photo[i][j])) {
                sum += nameNumber[photo[i][j]];
            }
        }
        answer.push(sum);
    }
    return answer;
}