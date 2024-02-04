const { stdin, stdout } = require('process');
const readline = require('readline');



const r = readline.createInterface({
    input: stdin,
    output: stdout,
})


r.question("enter your name ", (qo) => {
    console.log("you have entered " + qo)
    r.close();
})