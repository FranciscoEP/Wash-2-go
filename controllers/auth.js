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
  const deleteOrder = req.params.id
  console.log(deleteOrder)
  const data = req.body
  //console.log(req.user.id)
  const auto = await AutoInfo.create({
    ...data,
    userId: req.user.id,
  })
  //console.log(req.body)
  res.redirect('/profile')
}

exports.autoDetailView = (req, res) => {
  const { _id: userId } = req.user

  AutoInfo.find({ userId })
    .then((theCars) => {
      res.render('auth/autoDetail', { car: theCars })
    })
    .catch((error) => {
      console.log('Oops tha page your trying to see might not : ', error)
    })
}

//Delete cars

exports.autoDelete = async (req, res) => {
  const deleteOrder = req.params.id
  await AutoInfo.findByIdAndRemove(deleteOrder)
  res.redirect('/autoDetail')
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

//Update user

exports.profileEditView = async (req, res) => {
  const userInfo = req.user.id
  const userInSession = await User.findById(userInfo)

  res.render('auth/profileEdit', userInSession)
}

exports.profileEditAdd = async (req, res) => {
  const userInfo = req.user.id
  const userInSession = await User.findByIdAndUpdate(
    userInfo,
    { $set: { ...req.body } },
    { new: true }
  )
  res.redirect('/profile')
}

exports.deleteUser = async (req, res) => {
  const userInfo = req.user.id
  await User.findByIdAndDelete(userInfo)
  res.redirect('/')
}
