const express = require('express')
const router = express.Router()

const {
  indexView,
  signupView,
  loginView,
  signupAdd,
  loginAdd,
  profileView,
} = require('../controllers/index')

/* GET home page */
router.get('/', indexView)

//Sign up
router.get('/signup', signupView)
router.post('/signup', signupAdd)

//Login
router.get('/login', loginView)
router.post('/login', loginAdd)

//Profile
router.get('/profile', profileView)

module.exports = router
