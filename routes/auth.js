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
  loginViewWorker,
  loginAddWorker,
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
router.get('/loginUser', ensureLoggedOut(), loginView)
router.post('/loginUser', ensureLoggedOut(), loginAdd)
router.get('/loginWorker', ensureLoggedOut(), loginViewWorker)
router.post('/loginWorker', ensureLoggedOut(), loginAddWorker)

//Profile
router.get('/profileUser', ensureLoggedIn('/loginUser'), profileView)
router.get('/profileWorker', ensureLoggedIn('/loginWorker'), profileWorkerView)

//Logout
router.get('/logout', ensureLoggedIn('/login'), logout)

module.exports = router
