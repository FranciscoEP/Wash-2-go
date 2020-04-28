const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

const {
  signupWorkerView,
  signupWorkerAdd,
  workerFormView,
  workerFormAdd,
  signupView,
  loginView,
  signupAdd,
  loginAdd,
  profileView,
  logout,
} = require('../controllers/auth')

//Sign up User
router.get('/signup', ensureLoggedOut(), signupView)
router.post('/signup', ensureLoggedOut(), signupAdd)

//Sign up Chambeador
router.get('/signupWorker', ensureLoggedOut(), signupWorkerView)
router.post('/signupWorker', ensureLoggedOut(), signupWorkerAdd)
router.get('/workerForm', ensureLoggedOut(), workerFormView)
router.post('/workerForm', ensureLoggedOut(), workerFormAdd)
//Login
router.get('/login', ensureLoggedOut(), loginView)
router.post('/login', ensureLoggedOut(), loginAdd)

//Profile
router.get('/profile', ensureLoggedIn('/login'), profileView)

//Logout
router.get('/logout', ensureLoggedIn('/login'), logout)

module.exports = router
