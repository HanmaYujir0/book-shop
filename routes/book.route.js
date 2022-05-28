const { Router } = require('express');
const { bookController } = require('../controllers/book.controllers');

const router = Router();

router.get('/books', bookController.getBook)
router.get('/books/:id', bookController.getBookById)
router.post('/books', bookController.postBook)
router.delete('/books/:id', bookController.deleteBook)
router.patch('/books/:id', bookController.patchBook)
router.get('/genre/books/:id', bookController.getBookByGenre)

module.exports = router;