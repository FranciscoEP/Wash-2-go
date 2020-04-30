const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const {
  orderFormView,
  orderFormAdd,
  editOrderView,
  editOrderAdd,
  detailOrderView,
  deleteOrder,
} = require('../controllers/createOrder')

//Create
router.get('/orderForm', ensureLoggedIn(), orderFormView)
router.post('/orderForm', ensureLoggedIn(), orderFormAdd)

//Read
router.get('/detailOrder', ensureLoggedIn(), detailOrderView)

//Update
router.get('/editOrder/:id', ensureLoggedIn(), editOrderView)
router.post('/editOrder/:id', ensureLoggedIn(), editOrderAdd)

//Delete
router.get('/delete/:id', ensureLoggedIn(), deleteOrder)

module.exports = router
