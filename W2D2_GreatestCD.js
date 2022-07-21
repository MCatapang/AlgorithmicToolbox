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

        console.log(gcd(a, b));
        process.exit();
    }
}

function gcd(a, b) {
    // Original
    // let divisor = a > b ? a : b;
    // while(divisor > 0) {
    //     if(a % divisor == 0 && b % divisor ==0) {
    //         return divisor;
    //     } else {
    //         divisor--;
    //     }
    // }

    // Euclidean
    return a == 0 ? b : gcd(b%a, a);
}

module.exports = gcd;
