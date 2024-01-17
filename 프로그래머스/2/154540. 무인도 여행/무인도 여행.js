
function solution(maps) {
    var answer = [];
    maps = maps.map((m) => m.split(''))
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= maps.length || j >= maps[0].length || maps[i][j] === 'X')
            return 0;
        const result = parseInt(maps[i][j]);
        maps[i][j] = 'X';
        return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + result;
    }
    for (var i=0; i<maps.length; ++i)
    {
        for (var j=0; j<maps[i].length; ++j) {
            if (maps[i][j] !== 'X')
                answer.push(dfs(i, j));
        }
    }
    answer = answer.sort((a, b) => a - b);
    return answer.length == 0 ? [-1] : answer;
}