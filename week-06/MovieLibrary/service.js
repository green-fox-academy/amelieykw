const url = require('url');
const moviesData = require('./movies.json');

// first endpoint - [GET] /movies?genre=drama&title=Intouchable
exports.moviesRequest = function (req, res) {
    let reqUrl = url.parse(req.url, true);

    let result = [];
    let title = reqUrl.query.title;
    let genre = reqUrl.query.genre;
    if (title !== undefined && genre !== undefined) {
        moviesData.forEach(movie => {
            if (movie.title === title && movie.genre === genre) {
                result.push(movie);
            }
        });
    } else if (title !== undefined) {
        moviesData.forEach(movie => {
            if (movie.title === title) {
                result.push(movie);
            }
        });
    } else if (genre !== undefined) {
        moviesData.forEach(movie => {
            if (movie.genre === genre) {
                result.push(movie);
            }
        });
    } else {
        result = moviesData;
    }

    var response = {
        "movies_filtered": result
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

// second endpoint - [GET] /movies/{movieId}
exports.movieIdRequest = function (req, res) {
    let reqUrl = url.parse(req.url, true);

    let pathname = reqUrl.pathname;
    let movieId = pathname.split("/")[2];

    let result = [];
    if (typeof (+movieId) === "number" && movieId >= 1 && movieId < moviesData.length) {
        result = moviesData[movieId - 1];
    } else {
        result = moviesData;
    }

    var response = {
        "movie": result
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

// third endpoint - [DELETE] /movies/{movieId}
exports.deleteMovieRequest = function (req, res) {
    let reqUrl = url.parse(req.url, true);

    let pathname = reqUrl.pathname;
    let movieId = pathname.split("/")[2];

    let result = [];
    if (typeof (+movieId) === "number" &&  movieId.indexOf(movieId) === -1) {
        result = moviesData.splice(movieId - 1, 1);
        var response = {
            "movie": result
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } else {
        handlerError(req, res); 
    }
}

// fourth endpoint - [POST] /movies
exports.createMovieRequest = function (req, res) {
    let body = '';

    req.on('data', function (chunk) {
        body += chunk;
    }).on('end', function () {
        let postBody = JSON.parse(body);

        if (postBody.title !== undefined) {
            moviesData.push({
                "id": moviesData.length,
                "title": postBody.title,
                "genre": (postBody.genre === undefined) ? "unkown" : postBody.genre
            });

            let response = moviesData[moviesData.length - 1];

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        } else {
            handlerError(req, res); 
        }
    });
};

// fiveth endpoint - [PUT] /movies/{movieId}
exports.updateMovieRequest = function (req, res) {
    let reqUrl = url.parse(req.url, true);

    let pathname = reqUrl.pathname;
    let movieId = pathname.split("/")[2];

    let body = '';

    req.on('data', function (chunk) {
        body += chunk;
    }).on('end', function () {
        if (body !== '') {
            let postBody = JSON.parse(body);
            
            if (![postBody.id, postBody.title, postBody.genre].includes(undefined) && postBody.id === +movieId && movieId.indexOf(movieId) !== -1) {
                
                moviesData[postBody.id - 1].title = postBody.title;
                moviesData[postBody.id - 1].genre = postBody.genre;
                
                let response = moviesData[postBody.id - 1];

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response));
            } else {
                handlerError(req, res);
            }
        } else {
            handlerError(req, res);            
        }
    });
};

function handlerError(req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
}