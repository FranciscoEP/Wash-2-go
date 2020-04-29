const ServiceOrder = require('../models/ServiceOrder')
const User = require('../models/User')

exports.detailOrderView = (req, res) => {
  res.render('auth/detailOrder')
}
