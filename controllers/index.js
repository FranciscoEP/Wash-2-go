const User = require('../models/User')
const Supplier = require('../models/Supplier')
const passport = require('../config/passport')

exports.indexView = (req, res) => {
  res.render('index')
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
      res.redirect('/login')
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

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/login')
}
