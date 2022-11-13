const express = require('express')

const { createReview, getMyReview, getServiceReview, deleteReview } = require('../controllers/reviewController')
const router = express.Router()

router.post('/create/:id', createReview)
router.get('/reviews/:id', getServiceReview)
router.delete('/reviews/:id', deleteReview)
router.get('/myreview/:email', getMyReview)


module.exports = router