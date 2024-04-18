function solution(maps) {
    
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [{y:0, x:0, depth:1}];
    const visited = Array(maps.length).fill(-1).map((e) => Array(maps[0].length).fill(-1));
    
    visited[0][0] = 1;
    while(queue.length !==0) {
        const {y, x, depth} = queue.shift();
        for(i=0; i<4; ++i) {
            let nextY = y + dy[i];
            let nextX = x + dx[i];
            if (nextY < 0 || nextY >= maps.length || nextX < 0 || nextX >= maps[0].length || visited[nextY][nextX] !== -1 || maps[nextY][nextX] === 0) {
                continue;
            }
            queue.push({y:nextY, x:nextX, depth:depth + 1});
            visited[nextY][nextX] = depth + 1;
        }
    }
    var answer = 0;
    return visited[maps.length - 1][maps[0].length - 1];
}