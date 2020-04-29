const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

const {
  signupWorkerView,
  signupWorkerAdd,
  workerFormView,
  workerFormAdd,
  loginViewWorker,
  loginAddWorker,
  logout,
  profileWorkerView,
} = require('../controllers/auth')

//Sign up Chambeador
router.get('/signupWorker', ensureLoggedOut(), signupWorkerView)
router.post('/signupWorker', ensureLoggedOut(), signupWorkerAdd)
router.get('/workerForm', ensureLoggedIn(), workerFormView)
router.post('/workerForm', ensureLoggedIn(), workerFormAdd)

//Login
router.get('/loginWorker', ensureLoggedOut(), loginViewWorker)
router.post('/loginWorker', ensureLoggedOut(), loginAddWorker)

//Profile
router.get('/profileWorker', ensureLoggedIn('/loginWorker'), profileWorkerView)

//Logout
router.get('/logout', ensureLoggedIn('/loginWorker'), logout)

module.exports = router
