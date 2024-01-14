const express = require('express')
const auth = require('../middleware/auth');
const commentController = require('../controllers/comment')

const router = express.Router()


router.get('/:id', commentController.getAllComment)
router.post('/', commentController.createComment)

module.exports = router 
