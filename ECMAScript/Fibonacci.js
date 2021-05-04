process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function(data) {
    __input_stdin += data;
});

/*
 * Complete the function below.
 */
function fibonacciSequence(input) {    
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i=0;
    var myArray=[];
    for(i=0;i<input;i++)
    {
        sum = num1+num2;
        num1=num2;
        num2=sum;
        myArray.push(num2);
    }
    return myArray;
}
var fs = require('fs');
var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);

process.stdin.on('end', function() {
    __input_stdin_array = __input_stdin.split("\n");
    var input;
    var input = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;


    res = fibonacciSequence(input);
    for(var res_i = 0; res_i < res.length; res_i++) {
        wstream.write(res[res_i]+"\n");
    }

    wstream.end();
});
