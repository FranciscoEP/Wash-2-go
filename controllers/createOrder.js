const ServiceOrder = require('../models/ServiceOrder')
const User = require('../models/User')
const Sector = require('../models/Sector')

exports.detailOrderView = (req, res) => {
  const { _id: userId } = req.user
  Sector.find({userId})
  .then(theOrders => {
    console.log(theOrders)
    res.render('auth/detailOrder', {order: theOrders})
  })
  .catch(error => {
    console.log('Error while retrieving book details: ', error);
  })
}
