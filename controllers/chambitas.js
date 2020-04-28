const User = require('../models/User')

exports.chambitasMecanicosView = (req, res) => {
  res.render('auth/chambitasMecanicos')
}

exports.chambitasPlomerosView = (req, res) => {
  res.render('auth/chambitasPlomeros')
}

exports.chambitasLimpiezaView = (req, res) => {
  res.render('auth/chambitasLimpieza')
}
