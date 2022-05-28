const mongoose = require('mongoose');

const authorShema = mongoose.Schema ({
    authorsName: String,
    authorInfo: String,
});


const Author = mongoose.model('Author', authorShema);

module.exports = Author;