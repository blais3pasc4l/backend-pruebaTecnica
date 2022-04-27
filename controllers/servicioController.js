const Servicio = require("../models/Servicio");


exports.crearServicio = async(req, res) => {

    try {
        let servicios;

        // Creamos nuestro servicio
        servicio = new servicio(req.body);

        await servicio.save();
        res.send(servicio);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error...');
    }
}

exports.obtenerServicio = async(req, res) => {

    try {

        const servicio = await Servicio.find();
        res.json(servicio)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarservicio = async(req, res) => {

    try {
        const { servicio, fecha, fechaFin, } = req.body;
        let servicio1 = await servicio.findById(req.params.id);

        if (!servicio1) {
            res.status(404).json({ msg: 'No existe el servicio' })
        }

        servicio1.servicio = servicio;
        servicio1.fecha = fecha;
        servicio1.fechaFin = fechaFin;

        servicio1 = await servicio1.findOneAndUpdate({ _id: req.params.id }, servicio, { new: true })
        res.json(servicio1);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerServicio = async(req, res) => {

    try {
        let servicio = await servicio.findById(req.params.id);

        if (!servicio) {
            res.status(404).json({ msg: 'No existe el servicio' })
        }

        res.json(servicio);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarServicio = async(req, res) => {

    try {
        let servicio = await servicio.findById(req.params.id);

        if (!servicio) {
            res.status(404).json({ msg: 'No existe el servicio' })
        }

        await servicio.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'servicio eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}