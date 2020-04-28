const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceOrderSchema = new Schema(
  {
    // chambeadorId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    // },
    clienteId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    description: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const ServiceOrder = mongoose.model('ServiceOrder', serviceOrderSchema)
module.exports = ServiceOrder
