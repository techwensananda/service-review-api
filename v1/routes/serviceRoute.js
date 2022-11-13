const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const { createService, getAllServices, getService, postLikes } = require('../controllers/serviceController')
const router = express.Router()

router.post('/create', createService)
router.get('/services', getAllServices)
router.get('/services/:id', getService)
router.get('/like/:id', postLikes)

module.exports = router