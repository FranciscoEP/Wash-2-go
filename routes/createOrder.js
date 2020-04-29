const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const { editOrderView, /*editOrderAdd, */ detailOrderView } = require('../controllers/createOrder')

//Read
router.get('/detailOrder', ensureLoggedIn(), detailOrderView)

//Update
router.get('/editOrder/:id', ensureLoggedIn(), editOrderView)
// router.post('/editOrder/:id', ensureLoggedIn(), editOrderAdd)

module.exports = router
