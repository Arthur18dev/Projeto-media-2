var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);


function notas(a, b, c) {
    return (a * 2 + b * 3 + c * 5) /10;
}

let media = notas(a, b ,c);

console.log("MEDIA = " + media.toFixed(1))