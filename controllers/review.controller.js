const Review = require('../models/BookReview.model');

module.exports.reviewController = {
    postReview: (req, res) => {
        Review.findById(req.params.id).create({
            reviewText: req.body.reviewText,
            reviewAuthors: req.body.reviewAuthors,
            bookId: req.body.bookId,
        }).then(() => {
            res.json('Рецензия добавлена')
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        })
    },
    deleteReviewById: (req, res) => {
        Review.findByIdAndRemove(req.params.id).then(() => {
            res.json('рецензия удалена')
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        })
    },
    patchReview: (req, res) => {
        Review.find({
            bookId: req.params.id
        })
        .populate('Book')
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json('Error.Please, try again!')
        });
    },
}