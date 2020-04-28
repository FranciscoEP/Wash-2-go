const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    description: String,
    chambeador: false,
    sector: { type : Schema.Types.ObjectId, ref: 'Sector' }
  },
  { versionKey: false, timestamps: true }
)

userSchema.plugin(PLM, { usernameField: 'email' })
const User = mongoose.model('User', userSchema)
module.exports = User
