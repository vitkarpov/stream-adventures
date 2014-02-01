/**
 * Converting data using the through module
 */

var tr = require('through')(function(buf) {
    this.queue(buf.toString().toUpperCase());
});

process.stdin.pipe(tr).pipe(process.stdout);