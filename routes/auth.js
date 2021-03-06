const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

const {
  signupView,
  signupAdd,
  loginView,
  loginAdd,
  autoFormView,
  autoFormAdd,
  autoDetailView,
  autoDelete,
  logout,
  profileView,
  profileEditView,
  profileEditAdd,
  deleteUser,
} = require('../controllers/auth')

//Sign up
router.get('/signup', ensureLoggedOut(), signupView)
router.post('/signup', ensureLoggedOut(), signupAdd)
router.get('/autoForm', ensureLoggedIn(), autoFormView)
router.post('/autoForm', ensureLoggedIn(), autoFormAdd)
router.get('/autoDetail', ensureLoggedIn(), autoDetailView)
router.get('/autoDelete/:id', ensureLoggedIn(), autoDelete)

//Login
router.get('/login', ensureLoggedOut(), loginView)
router.post('/login', ensureLoggedOut(), loginAdd)

//Profile
router.get('/profile', ensureLoggedIn('/login'), profileView)
router.get('/profileEdit', ensureLoggedIn('/login'), profileEditView)
router.post('/profileEdit', ensureLoggedIn('/login'), profileEditAdd)

//Logout
router.get('/logout', ensureLoggedIn('/login'), logout)

//Delete
router.get('/deleteUser', ensureLoggedIn('/login'), deleteUser)

module.exports = router
