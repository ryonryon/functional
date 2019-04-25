const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const port = 9999;
const directory = 'www';

const mimeTypes = {
    "html": "text/html",
    "js": "text/javascript",
    "css": "text/css",
    "jpeg": "image/jpeg",
    "png": "image/png",
    "gif": "image/gif",
    "svg": "image/svg",
};

const request = function(req, res) {
    const uri = url.parse(req.url).pathname;
    const dir = path.join(__dirname, directory);
    const filepath = path.join(dir, unescape(uri));
    var indexfilepath = path.join(dir, unescape('index.html'));

    console.info('filepath', filepath);

    const f = function() {
        if (stats === undefined) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('404 Not Found\n');
            res.end();

        } else if(stats.isFile()) {
            const mimeType = mimeTypes[path.extname(filepath).split(".")[1]];
            res.writeHead(200, {'Content-Type': mimeType});
            const fileStream = fs.createReadStream(filepath).pipe(res);

            return;

        } else if (stats.isDirectory()) {
            res.writeHead(200, {'Content-Type': "text/html"});
            const fileStream = fs.createReadStream(indexfilepath).pipe(res);

            return;

        } else {
            res.writeHead(500, {'Content-Type': 'text/plain'}).write('500 Internal server error\n').end();

            return;
        }
    };

    const component = fs.stats(filepath, f);
    
    return;
};

const serverUp = function() {
    console.info('HTTP server listening', port);

    return;
};

const server = http.createServer(request).listen(port, serverUp);