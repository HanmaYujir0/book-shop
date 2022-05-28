const mongoose = require('mongoose');

const bookShema = mongoose.Schema ({
    bookName: String,
    author: {
        ref: 'Author',
        type: mongoose.SchemaTypes.ObjectId
    },
    genre: {
        ref: 'Genre',
        type: mongoose.SchemaTypes.ObjectId
    },
});

const Book = mongoose.model('Book', bookShema);

module.exports = Book