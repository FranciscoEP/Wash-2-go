const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

const {
  indexView,
  signupView,
  loginView,
  signupAdd,
  loginAdd,
  profileView,
  logOut,
} = require('../controllers/index')

/* GET home page */
router.get('/', indexView)

//Sign up
router.get('/signup',ensureLoggedOut(), signupView)
router.post('/signup',ensureLoggedOut(), signupAdd)

//Login
router.get('/login',ensureLoggedOut() ,loginView)
router.post('/login',ensureLoggedOut(), loginAdd)

//Profile
router.get('/profile',ensureLoggedIn("/login"), profileView)

//Logout
router.post('/logout', ensureLoggedIn("/login"), logOut)

module.exports = router
