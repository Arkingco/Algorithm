
function solution(n, edge) {
    const arr = new Array(n).fill().map(_ => []);

    for(const e of edge) {
      arr[e[0]-1].push(e[1]-1);
      arr[e[1]-1].push(e[0]-1);
    }
    
    const visited = [1];
    const queue = [0];
    
    while(queue.length)
	{
        const cur = queue.shift();
    	
        for (const next of arr[cur])
        {
			if (!visited[next])
            {
                visited[next] = visited[cur] + 1;
                queue.push(next);
            }
        }
    }
    
    const max = Math.max(...visited);
    return visited.filter(deps => deps === max).length
}
