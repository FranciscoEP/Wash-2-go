const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    address: String,
    serviceOrder: { type: Schema.Types.ObjectId, ref: 'ServiceOrder' },
  },
  { versionKey: false, timestamps: true }
)

userSchema.plugin(PLM, { usernameField: 'email' })
const User = mongoose.model('User', userSchema)
module.exports = User
