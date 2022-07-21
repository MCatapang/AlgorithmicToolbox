// by Alexander Nikolskiy

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
    let arr = [0, 1];
    if(n <= 1) {
        return n
    }
    while(n > 1) {
        arr.push(arr[0] + arr[1]);
        arr.shift();
        n--
    }
    console.log(arr[1]);
    let nString = arr[1].toString();
    return Number(nString[nString.length-1]);
}

module.exports = fib;
