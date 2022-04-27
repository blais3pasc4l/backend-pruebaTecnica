// Rutas para 
const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

// api/servicios
router.post('/', servicioController.crearServicio);
router.get('/', servicioController.obtenerServicios);
router.put('/:id', servicioController.actualizarServicio);
router.get('/:id', servicioController.obtenerServicio);
router.delete('/:id', servicioController.eliminarServicio);

module.exports = router;