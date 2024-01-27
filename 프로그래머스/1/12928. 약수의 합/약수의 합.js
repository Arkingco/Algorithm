function solution(n) {
    var answer = 0;

    // 제곱근 까지만 값을 확인 
    for (var i=0; i<=Math.sqrt(n); ++i) {
        // 소수점 버리기
        const a = Math.floor(n / i);
        // 나눈수와 몫을 곱했을 때 n과 같으면 약수
        if (i * a === n) {
            // 중복된 수는 제거 ex) 4 = 1 2 2 4 => 1 2 4
            if (i === a)
                answer += i;               
            else
                answer += i + a;
        }
    }
    return answer;
    
}