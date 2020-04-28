const ServiceOrder = require('../models/ServiceOrder')
const User = require('../models/User')

exports.createOrderView = (req, res) => {
  res.render('auth/createOrder')
}
