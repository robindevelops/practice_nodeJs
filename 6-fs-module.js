const fs = require('fs');


let text = fs.readFileSync('./files/first.txt', 'utf-8');

let output = fs.writeFileSync('./files/second.txt', 'I am writing this file from first.text  = ' + text)

console.log(text);
