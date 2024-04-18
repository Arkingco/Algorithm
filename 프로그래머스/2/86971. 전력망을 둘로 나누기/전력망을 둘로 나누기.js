

function solution(n, wires) {
    let answer = 101;
    let list = Array(n + 1).fill().map(() => []);
    wires.map((e) => {
        const [a, b] = e;
        list[a].push(b);
        list[b].push(a);
    })
    
    // 끊는 걸 방문하지 않음으로 해결

    
    const bfs = (start, ignore, visited = new Set()) => {
        const queue = [start];
        let count = 0;
        visited.add(start);
        
        while(queue.length !== 0) {
            const here = queue.shift();
            list[here].forEach((next) => {
                if(visited.has(next) || next === ignore) return ;
                visited.add(next);
                queue.push(next);
            })        
            count++;
        }
        return count;
    }
    
    wires.forEach((e, i) => {
        const [a, b] = e;
        answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
    })
    return answer;
}