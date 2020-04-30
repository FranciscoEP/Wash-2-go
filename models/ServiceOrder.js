const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceOrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    autoId: { type: Schema.Types.ObjectId, ref: 'Auto-Info' },
    limpiezaCarroceria: String,
    limpiezaRines: String,
    lavadoMotor: String,
    limpiezaVestiduras: String,
    descontaminanteCristales: String,
    pulidoFaros: String,
    lavadoChasis: String,
    encerado: String,
    aspirado: String,
    schedule: String,
    time: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const ServiceOrder = mongoose.model('ServiceOrder', serviceOrderSchema)
module.exports = ServiceOrder

// const carrosUser = await carros.find({userId: req.user.id})
// res.render(auth/vistadeCarros, carrosUser)

// router.get(`/vercarros/:id`, controldor de esta ruta) esto va en su pagina de rutas!!!!

// <a href='/vercarros/{{_id}}'> Ver Carro Detalle </a> esto va en su vista de carros(no en la detallada en la lista de todos los carros)
