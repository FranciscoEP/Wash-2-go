const ServiceOrder = require('../models/ServiceOrder')
const User = require('../models/User')
const Sector = require('../models/Sector')

exports.workerFormView = (req, res) => {
  res.render('auth/workerForm')
}

exports.workerFormAdd = async (req, res) => {
  const {
    limpiezaCarroceria,
    limpiezaRines,
    lavadoMotor,
    limpiezaVestiduras,
    descontaminanteCristales,
    pulidoFaros,
    lavadoChasis,
    encerado,
    aspirado,
  } = req.body
  console.log(req.user.id)
  const form = await Sector.create({
    limpiezaCarroceria,
    limpiezaRines,
    lavadoMotor,
    limpiezaVestiduras,
    descontaminanteCristales,
    pulidoFaros,
    lavadoChasis,
    encerado,
    aspirado,
    userId: req.user.id,
  })
  console.log(req.body)
  res.redirect('/profileWorker')
}

exports.detailOrderView = (req, res) => {
  const { _id: userId } = req.user
  let counter = 0
  counter++
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
  res.render('auth/editOrder')
}
//URGE POR CRUD
exports.editOrderAdd = async (req, res) => {
  const edit = req.params.id
  await Sector.findByIdAndUpdate(edit, { $set: { ...req.body } }, { new: true })
  res.render(`auth/editOrder/${edit}`, edit)
}

exports.deleteOrder = async (req, res) => {
  const deleteOrder = req.params.id
  await Sector.findByIdAndRemove(deleteOrder)
  res.redirect('/detailOrder')
}
