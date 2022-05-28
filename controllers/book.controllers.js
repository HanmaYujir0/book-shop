const Book = require('../models/Book.model');

module.exports.bookController = {
    postBook: (req, res) => {
        Book.create({
            bookName: req.body.bookName,
            author: req.body.author,
            genre: req.body.genre
        }).then(() => {
            res.json('Книга добавлена ')
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        })
    },
    deleteBook: (req, res) => {
        Book.findByIdAndRemove(req.params.id).then(() => {
            res.json('Книга удалена')
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        })
    },
    patchBook: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
            bookName: req.body.bookName,
            author: req.body.author,
            genre: req.body.genre
        }).then(() => {
            res.json('Книга изменена ')
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        })
    },
    getBookById: (req, res) => {
        Book.findById(req.params.id)
        .populate("Genre")
        .populate("Author")
        .then((data) => {
            res.json(data)
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    },
    getBook: (req, res) => {
        Book.find()
        .populate("Genre")
        .populate("Author")
        .then((data) => {
            res.json(data)
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    },
    getBookByGenre: (req, res) => {
        Book.find({ genre: req.params.id })
        .populate("Genre")
        .populate("Author")
        .then((data) => {
            res.json(data)
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    }
};