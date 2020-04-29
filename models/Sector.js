const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sectorSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    limpiezaCarroceria: String,
    limpiezaRines: Boolean,
    lavadoMotor: Boolean,
    limpiezaVestiduras: Boolean,
    descontaminanteCristales: Boolean,
    pulidoFaros: Boolean,
    lavadoChasis: Boolean,
    encerado: Boolean,
    aspirado: Boolean,
    progressStatus: Boolean,
    orderNumber: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Sector = mongoose.model('Sector', sectorSchema)
module.exports = Sector
