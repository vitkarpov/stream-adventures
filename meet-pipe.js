/**
 * Program recieves filename as an argument
 * and should create readable stream and pipes it to
 * the standart output
 */

var fs = require('fs');
var nameFile = process.argv[2];

(function() {
    if (!nameFile) {
        return console.error('Invalid filename!');
    }

    fs.createReadStream(nameFile).pipe(process.stdout);
}());