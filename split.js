var split = require('split');
var through = require('through');
var count = 0;

process.stdin
    .pipe(split())
    .pipe(through(function(buf) {
        var line = buf.toString();

        this.queue(count % 2 === 0
            ? line.toLowerCase() + '\n'
            : line.toUpperCase() + '\n'
        );

        count++;
    }))
    .pipe(process.stdout)
;