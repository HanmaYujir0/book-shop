const mongoose = require('mongoose');

const reviewShema = mongoose.Schema ({
    reviewText: String,
    reviewAuthors: {
        ref: 'Genre',
        type: mongoose.SchemaTypes.ObjectId
    },
    bookId: {
        ref: 'Genre',
        type: mongoose.SchemaTypes.ObjectId
    },
});

const Review = mongoose.model('Review', reviewShema);

module.exports = Review