const express = require('express')
const router = express.Router()

const { createOrderView } = require('../controllers/createOrder')

router.get('/createOrder', createOrderView)

module.exports = router
