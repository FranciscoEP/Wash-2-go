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
  profileWorkerView,
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
router.get('/profileUser', ensureLoggedIn('/login'), profileView)
router.get('/profileWorker', ensureLoggedIn('/login', profileWorkerView))

//Logout
router.get('/logout', ensureLoggedIn('/login'), logout)


module.exports = router
