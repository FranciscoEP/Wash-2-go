const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sectorSchema = new Schema(
  {
    sector: { type: String, enum: ['Mecánico', 'Plomero', 'Labores Domésticas'] },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    description: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Sector = mongoose.model('Sector', sectorSchema)
module.exports = Sector
