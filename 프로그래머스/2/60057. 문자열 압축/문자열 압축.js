function solution(s) {
    var answer = 999999;
    
    for (let index=1; index<=s.length/2+1; ++index) {
        let words = [];
        let str = ""
        for(let i=0; i<s.length; i += index) {
            words.push(s.slice(i,i+index));
        }
        for (let i=0; i<words.length; ++i) {
            let count = 0;
            for (let j=i + 1; j<words.length; ++j) {
                if (words[i] === words[j]) count++;
                else 
                    break;
            }
            if (count > 0) {
                str += `${count + 1}${words[i]}`;       
                i = i + count;
            } else {
                str +=  `${words[i]}`;
            }
        }
        answer = Math.min(answer, str.length);
        // console.log(str, words);
    }
    return answer;
}