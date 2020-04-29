const ServiceOrder = require('../models/ServiceOrder')
const User = require('../models/User')
const Sector = require('../models/Sector')

exports.workerFormView = (req, res) => {
  res.render('auth/workerForm')
}

exports.workerFormAdd = async (req, res) => {
  const data = stringToBoolean(req.body)
  console.log(req.user.id)
  const form = await Sector.create({
    ...data,
    userId: req.user.id,
  })
  console.log(req.body)
  res.redirect('/profileWorker')
}

exports.detailOrderView = (req, res) => {
  const { _id: userId } = req.user

  Sector.find({ userId })
    .then((theOrders) => {
      res.render('auth/detailOrder', { order: theOrders })
    })
    .catch((error) => {
      console.log('Error while retrieving book details: ', error)
    })
}

exports.editOrderView = async (req, res) => {
  const edit = req.params.id
  console.log(req.params.id)
  const editOrder = await Sector.findById(edit)
  res.render('auth/editOrder', { _id: edit })
}

exports.editOrderAdd = async (req, res) => {
  const edit = req.params.id
  console.log(edit)
  const data = stringToBoolean(req.body)
  console.log({ ...data })
  try {
    await Sector.findByIdAndUpdate(edit, { $set: { ...data } }, { new: true })
    res.render(`auth/editOrder/${edit}`, edit)
  } catch (error) {
    console.log(error)
  }
}

exports.deleteOrder = async (req, res) => {
  const deleteOrder = req.params.id
  await Sector.findByIdAndRemove(deleteOrder)
  res.redirect('/detailOrder')
}

function stringToBoolean(obj) {
  for (let key in obj) {
    obj[key] = obj[key] === 'true' ? true : false
  }
  return obj
}
