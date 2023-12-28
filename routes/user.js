const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');

const userController = require('../controllers/user')

router.post('/login', userController.login)
router.post('/signup', userController.signup)
router.get('/', auth, userController.getAllUser)
router.delete('/:id', auth, userController.deleteUser)
router.put('/:id', userController.updateUser)


module.exports = router