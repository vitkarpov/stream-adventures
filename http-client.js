var request = require('request');
var r = request.post('http://localhost:8000');

/**
 * we need to make a post request
 * pipe standart input to it
 * and send everything to standart output
 */

process.stdin
    .pipe(r)
    .pipe(process.stdout);