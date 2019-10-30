const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);
    
    // console.log(reqUrl);

    let pathname = reqUrl.pathname;
    let parts = pathname.split("/");
    
    console.log('Request Type:' + req.method + ' Endpoint: ' + reqUrl.pathname);
    // GET Endpoint
    if (parts[1] === 'movies' && req.method === 'GET') {
        if (reqUrl.search !== null) {            
            service.moviesRequest(req, res);
        } else if (reqUrl.search === null) {
            service.movieIdRequest(req, res);
        }
    }
});