const url = require('url');
const moviesData = require('./movies.json');

// first endpoint - [GET] /movies?genre=drama&title=Intouchable
exports.moviesRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    
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
    const reqUrl = url.parse(req.url, true);

    const pathname = reqUrl.pathname;
    let movieId = pathname.split("/")[2];
    
    let result = [];
    if (typeof (+movieId) === "number" && movieId >= 1 && movieId < moviesData.length) {
        result = moviesData[movieId - 1];
    } 

    var response = {
        "movie": result
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};