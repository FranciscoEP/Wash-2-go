const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const { detailOrderView } = require('../controllers/createOrder')

//Read
router.get('/detailOrder', ensureLoggedIn(), detailOrderView)

module.exports = router
