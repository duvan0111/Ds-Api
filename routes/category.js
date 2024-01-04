const express = require('express')
const auth = require('../middleware/auth');
const categoryController = require('../controllers/category')

const router = express.Router()


router.get('/', auth, categoryController.getAllCategory)
router.get('/:id', auth, categoryController.getOneCategory)
router.post('/', auth, categoryController.createCategory)
router.put('/:id', auth, categoryController.updateCategory)
router.delete('/:id', auth, categoryController.deleteCategory)

module.exports = router 
