// var readline = require('readline');

// process.stdin.setEncoding('utf8');
// var rl = readline.createInterface({
//   input: process.stdin,
//   terminal: false
// });

// rl.on('line', readLine);

// function readLine (line) {
//   if (line !== "\n") {
//     var a = parseInt(line.toString().split(' ')[0], 10);
//     var b = parseInt(line.toString().split(' ')[1], 10);
//     console.log(a + b);
//     process.exit();
//   }
// }

// Test for Coursera's Grading System
function twoSum(str) {
    let numArr = parseInt(str).split(" ");
    if(numArr.length == 2) {
        return numArr[0] + numArr[1];
    }
}