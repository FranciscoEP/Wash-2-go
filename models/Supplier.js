const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PLM = require('passport-local-mongoose')

const supplierSchema = new Schema(
  {
    name: String,
    email: String,
    workingCity: [],
    workingSector: [],
  },
  {
    timestamps: true,
  }
)

supplierSchema.plugin(PLM, { usernameField: 'email' })
const Supplier = mongoose.model('Supplier', supplierSchema)
module.exports = Supplier
