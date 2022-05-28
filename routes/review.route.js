const {Router} = require('express');
const {reviewController} = require('../controllers/review.controller');

const router = Router();

router.get('/reviews', reviewController.patchReview)
router.post('/reviews/:id', reviewController.postReview)
router.delete('/reviews/:id', reviewController.deleteReviewById)

module.exports = router;