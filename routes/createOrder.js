const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const {
  editOrderView,
  /*editOrderAdd, */ detailOrderView,
  deleteOrder,
} = require('../controllers/createOrder')

//Read
router.get('/detailOrder', ensureLoggedIn(), detailOrderView)

//Update
router.get('/editOrder', ensureLoggedIn(), editOrderView)
// router.post('/editOrder/:id', ensureLoggedIn(), editOrderAdd)

//Delete
router.get('/delete/:id', ensureLoggedIn(), deleteOrder)

module.exports = router
