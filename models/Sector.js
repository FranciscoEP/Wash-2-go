const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sectorSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    limpiezaCarroceria: Boolean,
    limpiezaRines: Boolean,
    lavadoMotor: Boolean,
    limpiezaVestiduras: Boolean,
    descontaminanteCristales: Boolean,
    pulidoFaros: Boolean,
    lavadoChasis: Boolean,
    encerado: Boolean,
    aspirado: Boolean,
    progressStatus: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Sector = mongoose.model('Sector', sectorSchema)
module.exports = Sector
