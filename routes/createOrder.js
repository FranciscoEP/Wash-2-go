const express = require('express')
const router = express.Router()

const { createOrderView, createOrderAdd } = require('../controllers/createOrder')

//Create
router.get('/createOrder', createOrderView)
router.post('/createOrder', createOrderAdd)

module.exports = router
