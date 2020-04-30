const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceOrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    limpiezaCarroceria: String,
    limpiezaRines: String,
    lavadoMotor: String,
    limpiezaVestiduras: String,
    descontaminanteCristales: String,
    pulidoFaros: String,
    lavadoChasis: String,
    encerado: String,
    aspirado: String,
    progressStatus: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const ServiceOrder = mongoose.model('ServiceOrder', serviceOrderSchema)
module.exports = ServiceOrder
