const { Router } = require('express');
const { genreController } = require('../controllers/genre.controllers')

const router = Router();

router.get('/genre', genreController.getGenre)
router.post('/genre', genreController.postGenre)
router.delete('/genre/:id', genreController.deleteGenre)

module.exports = router;