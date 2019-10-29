module.exports = {
    getAllBooks: (req, res) => {
        let query = "SELECT * FROM book_mast"; // query database to get all the books' titles
    
        // execute query 
        db.query(query, (req, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: 'All Books in BookStore',
                books: result
            });
        });
    }
};