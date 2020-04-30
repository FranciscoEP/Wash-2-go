const User = require('../models/User')
const AutoInfo = require('../models/AutoInfo')
const passport = require('../config/passport')

exports.signupView = (req, res) => {
  res.render('auth/signup')
}
exports.signupAdd = (req, res, next) => {
  const { name, email, password, sector } = req.body
  const newWorker = new User()
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

  User.register({ email, name, sector }, password)
    .then((userCreated) => {
      console.log(userCreated)
      res.redirect('/login')
    })
    .catch((error) => {
      next(error)
    })
}

exports.autoFormView = (req, res) => {
  res.render('auth/autoForm')
}

exports.autoFormAdd = async (req, res) => {
  const { _id: userId } = req.user
  const data = req.body
  console.log(req.user.id)
  const auto = await AutoInfo.create({
    ...data,
    userId: req.user.id,
  })
  console.log(req.body)
  res.redirect('/profile')
}

exports.loginView = (req, res) => {
  res.render('auth/login')
}

exports.loginAdd = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
})

exports.profileView = async (req, res) => {
  res.render('auth/profile')
}

//Create

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}
