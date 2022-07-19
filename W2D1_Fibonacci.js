const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    // /* original recursion */
    // return n <= 1 ? n : fib(n-1) + fib(n-2)

    /* efficient solution */
    let arr = [0, 1];
    if(n <= 1) {
        return n
    }
    while(n > 1) {
        arr.push(arr[0] + arr[1]);
        arr.shift();
        n--
    }
    return arr[1];
}

module.exports = fib;