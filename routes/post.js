const express = require('express')
const auth = require('../middleware/auth');
const postController = require('../controllers/post')

const router = express.Router()


router.get('/', postController.getAllPost)
router.get('/:id', postController.getOnePost)
router.post('/', auth, postController.createPost)
router.put('/:id', auth, postController.updatePost)
router.delete('/:id', auth, postController.deletePost)

module.exports = router 
