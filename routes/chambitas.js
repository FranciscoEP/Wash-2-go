const express = require('express')
const router = express.Router()

const { chambitasView } = require('../controllers/chambitas')

router.get('/chambitas', chambitasView)

module.exports = router
