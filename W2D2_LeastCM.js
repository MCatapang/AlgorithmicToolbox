const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(lcm(a, b));
        process.exit();
    }
}

function lcm(a, b) {
    let divisor = a == 0 ? b : gcd(b%a, a);
    return (a*b)/divisor;
}

function gcd(a, b) {
    return a == 0 ? b : gcd(b%a, a);
}

module.exports = lcm;