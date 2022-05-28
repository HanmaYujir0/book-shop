const Genre = require('../models/Genre.model');

module.exports.genreController = {
    postGenre: (req, res) => {
        Genre.create({
            genreName: req.body.genreName,
            descriptionGenre: req.body.descriptionGenre,
        }).then(() => {
            res.json('Жанр добавлен')
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        })
    },
    deleteGenre: (req, res) => {
        Genre.findByIdAndRemove(req.params.id).then(() => {
            res.json('Жанр удален')
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        })
    },
    getGenre: (req, res) => {
        Genre.find().then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        })
    }
}