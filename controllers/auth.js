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
      res.redirect('/workerForm')
    })
    .catch((error) => {
      next(error)
    })
}

exports.signupView = (req, res) => {
  res.render('auth/signup')
}

exports.signupAdd = (req, res, next) => {
  const { name, email, password, verify } = req.body

  if (email === '' || password === '') {
    return res.render('auth/signup', { message: 'Indicate an email and password' })
  }

  User.findOne({ email })
    .then((user) => {
      if (user !== null) {
        return res.render('auth/signup', { message: 'The username already exists' })
      }
    })
    .catch((error) => {
      next(error)
    })

  User.register({ email, name }, password)
    .then((userCreated) => {
      console.log(userCreated)
      res.redirect('/profile')
    })
    .catch((error) => {
      next(error)
    })
}

exports.loginView = (req, res) => {
  res.render('auth/login')
}

exports.loginAdd = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
})

exports.profileView = (req, res) => {
  res.render('auth/profile')
}

exports.profileWorkerView = (req, res) => {
  res.render('auth/profileWorker')
}
exports.workerFormView = (req, res) => {
  res.render('auth/workerForm')
}

exports.workerFormAdd = async (req, res) => {
  const { description, sector } = req.body
  const form = await Sector.create({ sector, description })
  res.redirect('/profileWorker')
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/login')
}
