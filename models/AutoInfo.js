const mongoose = require('mongoose')
const Schema = mongoose.Schema

const autoInfoSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    tipo: String,
    marca: String,
    modelo: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const AutoInfo = mongoose.model('AutoInfo', autoInfoSchema)
module.exports = AutoInfo