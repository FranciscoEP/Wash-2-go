const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sectorSchema = new Schema(
  {
    chambeadorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    clienteId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Sector = mongoose.model('Sector', sectorSchema)
module.exports = Supplier
