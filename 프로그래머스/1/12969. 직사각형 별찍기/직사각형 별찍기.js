process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const arr = data.split(" ");
    const [n, m] = [arr[0], arr[1]];

    for(let i = 0; i<m; i++){
        console.log("*".repeat(n));
    }

});