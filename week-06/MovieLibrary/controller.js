const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);
    
    // console.log(reqUrl);

    let pathname = reqUrl.pathname;
    let parts = pathname.split("/");
    
    console.log('Request Type:' + req.method + ' Endpoint: ' + reqUrl.pathname);
    if (parts[1] === 'movies') {
        // GET Endpoint
        if (reqUrl.search !== null && req.method === 'GET') {            
            service.moviesRequest(req, res);
        } else if (reqUrl.search === null) {
            if (req.method === 'GET') {
                service.movieIdRequest(req, res);
            } else if (req.method === 'DELETE') {
                service.deleteMovieRequest(req, res);
            } else if (req.method === 'POST') {
                service.createMovieRequest(req, res);
            } else if (req.method === 'PUT') {
                service.updateMovieRequest(req, res);
            } 
        } 
    } 
});