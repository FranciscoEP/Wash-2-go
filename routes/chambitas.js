const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

const { chambitasMecanicos } = require('../controllers/chambitas')

router.get('/chambitasMecanicos',ensureLoggedIn(), chambitasMecanicos)

module.exports = router
