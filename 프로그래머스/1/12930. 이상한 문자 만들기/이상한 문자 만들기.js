function solution(s) {
    let a = true;
    let str = [];
    for (let i=0; i<s.length; ++i) {
        if(s[i] === ' ') {
            a = true;
            str.push(s[i]);
            continue;
        }
        str.push(a ? s[i].toUpperCase() : s[i].toLowerCase());
        a = !a;
    }
    return str.join('');
}