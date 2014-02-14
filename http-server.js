var http = require('http'),
    through = require('through');

var server = http.createServer(function(req, res) {
    if ('POST' === req.method) {
        req
            .pipe(through(function(buff) {
                this.queue(buff.toString().toUpperCase());
            }))
            .pipe(res);
    } else {
        res.end('There`s no POST request');
    }
});
server.listen(process.argv[2]);