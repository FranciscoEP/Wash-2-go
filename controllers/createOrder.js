const ServiceOrder = require('../models/ServiceOrder')
const User = require('../models/User')

exports.createOrderView = (req, res) => {
  res.render('auth/createOrder')
}
//Create order
exports.createOrderAdd = async (req, res) => {
  const { description, sector } = req.body
  const { _id: userId } = req.user
  // console.log(req.body)
  console.log(req.session.user)
  // const order = await ServiceOrder.create(description, sector, userId)
  res.render('auth/profile', order)
}
