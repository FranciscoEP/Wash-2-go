const User = require('../models/User')
const ServiceOrder = require('../models/ServiceOrder')

exports.orderFormView = (req, res) => {
  res.render('auth/orderForm', {_id: req.params.id})
}

exports.orderFormAdd = async (req, res) => {
  const data = req.body
  console.log(data)
  const form = await ServiceOrder.create({
    ...data,
    userId: req.user.id,
    autoId: req.params.id
  })
  res.redirect('/profile')
}

exports.detailOrderView = (req, res) => {
  const { _id: userId } = req.user

  ServiceOrder.find({ userId })
    .then((theOrders) => {
      res.render('auth/detailOrder', { order: theOrders })
    })
    .catch((error) => {
      console.log('Oops tha page your trying to see might not : ', error)
    })
}

exports.editOrderView = async (req, res) => {
  const edit = req.params.id

  const editOrder = await ServiceOrder.findById(edit)
  res.render('auth/editOrder', { _id: edit })
}

exports.editOrderAdd = async (req, res) => {
  const edit = req.params.id
  const data = req.body

  try {
    await ServiceOrder.findByIdAndUpdate(edit, { ...data }, { new: true })
    res.redirect(`/detailOrder`)
  } catch (error) {
    console.log(error)
  }
}

exports.deleteOrder = async (req, res) => {
  const deleteOrder = req.params.id
  console.log(deleteOrder)
  await ServiceOrder.findByIdAndRemove(deleteOrder)
  res.redirect('/detailOrder')
}

// function stringToBoolean(obj) {
//   const object = {}
//   for (let key in obj) {
//     object[key] = obj[key] === 'true' ? true : false
//   }
//   return object
// }
