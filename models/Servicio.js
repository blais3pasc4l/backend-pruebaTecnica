const mongoose = require('mongoose');

const ServicioSchema = mongoose.Schema({
    servicio: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    fechaFin: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Servicio', ServicioSchema);