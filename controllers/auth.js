const User = require('../models/User')
const Sector = require('../models/Sector') // Revisar si es necesario para registrar el sector
const passport = require('../config/passport')

exports.signupWorkerView = (req, res) => {
  res.render('auth/signupWorker')
}
exports.signupWorkerAdd = (req, res, next) => {
  const { name, email, password, sector, chambeador } = req.body
  const newWorker = new User()
  if (email === '' || password === '') {
    return res.render('auth/signupWorker', { message: 'Indicate an email and password' })
  }

  User.findOne({ email })
    .then((user) => {
      if (user !== null) {
        return res.render('auth/signupWorker', { message: 'The username already exists' })
      }
    })
    .catch((error) => {
      next(error)
    })

  User.register({ email, name, sector, chambeador }, password)
    .then((userCreated) => {
      console.log(userCreated)
      res.redirect('/loginWorker')
    })
    .catch((error) => {
      next(error)
    })
}

exports.loginViewWorker = (req, res) => {
  res.render('auth/loginWorker')
}

exports.loginAddWorker = passport.authenticate('local', {
  successRedirect: '/profileWorker',
  failureRedirect: '/loginWorker',
})

exports.profileWorkerView = async (req, res) => {
  res.render('auth/profileWorker')
}
exports.workerFormView = (req, res) => {
  res.render('auth/workerForm')
}

//Create
exports.workerFormAdd = async (req, res) => {
  const { limpiezaCarroceria,
    limpiezaRines, 
    lavadoMotor, 
    limpiezaVestiduras, 
    descontaminanteCristales,
    pulidoFaros, 
    lavadoChasis, 
    encerado, 
    aspirado 
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
    userId : req.user.id})
  console.log(req.body)
  res.redirect('/profileWorker')
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}
