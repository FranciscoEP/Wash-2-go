const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const {
  workerFormView,
  workerFormAdd,
  editOrderView,
  editOrderAdd,
  detailOrderView,
  deleteOrder,
} = require('../controllers/createOrder')

//Create
router.get('/workerForm', ensureLoggedIn(), workerFormView)
router.post('/workerForm', ensureLoggedIn(), workerFormAdd)

//Read
router.get('/detailOrder', ensureLoggedIn(), detailOrderView)

//Update
router.get('/editOrder/:id', ensureLoggedIn(), editOrderView)
router.post('/editOrder/:id', ensureLoggedIn(), editOrderAdd)

//Delete
router.get('/delete/:id', ensureLoggedIn(), deleteOrder)

module.exports = router
