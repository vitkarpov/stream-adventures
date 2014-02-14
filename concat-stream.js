var concat = require('concat-stream');

/**
 * we need to get standart input stream
 * reverse it as string and send to standart output
 */

process.stdin
    .pipe(concat(function(buff) {
        var data = buff.toString() || '';
        // console.log is the same as process.stdout.write
        // in this case (we run programm in terminal)
        console.log(data.split('').reverse().join(''));
    }));