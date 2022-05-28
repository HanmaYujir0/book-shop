const Author = require('../models/Author.model');

module.exports.authorController = {
    postAuthor: (req, res) => {
        Author.create({
            authorsName: req.body.authorsName,
            authorInfo: req.body.authorInfo,
        }).then(() => {
            res.json("Автор добавлен")
        }).catch((err) => res.json("Error.Please, try again!"))
    },
    getAuthor: (req, res) => {
        Author.find().then((data) => {
            res.json(data)
        })
            .catch((err) => res.json("Error.Please, try again!"))
    },
    getAuthorById: (req, res) => {
        Author.findById(req.params.id).then((data) => {
            res.json(data)
        }).catch((err) => res.json("Error.Please, try again!"))
    },
    deleteAuthorById: (req, res) => {
        Author.findByIdAndRemove(req.params.id).then(() => {
            res.json("Автор удален")
        }).catch((err) => res.json("Error.Please, try again!"))
    },
    patchAuthorById: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, {
            authorsName: req.body.authorsName,
            authorInfo: req.body.authorInfo,
        }).then(() => {
            res.json("Автор изменен")
        }).catch((err) => res.json("Error.Please, try again!"))
    }
}
