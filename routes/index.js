const express = require('express')
const router = express.Router()

const { indexView } = require('../controllers/index')

/* GET home page */
router.get('/', indexView)

module.exports = router
