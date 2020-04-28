const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

const {
  chambitasMecanicosView,
  chambitasPlomerosView,
  chambitasLimpiezaView,
} = require('../controllers/chambitas')

router.get('/chambitasMecanicos', ensureLoggedIn(), chambitasMecanicosView)

router.get('/chambitasPlomeros', ensureLoggedIn(), chambitasPlomerosView)

router.get('/chambitasLimpieza', ensureLoggedIn(), chambitasLimpiezaView)

module.exports = router
