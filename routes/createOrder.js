const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const { createOrderView, createOrderAdd } = require('../controllers/createOrder')

//Create
router.get('/createOrder', ensureLoggedIn(), createOrderView)
router.post('/createOrder', ensureLoggedIn(), createOrderAdd)

module.exports = router
