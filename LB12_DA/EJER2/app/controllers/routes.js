var express = require('express');
var bodyParser = require('body-parser');
var Alumno = require('../models/alumnos');

var router = express.Router();

// Configurar parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Middleware de prueba
router.use(function(req, res, next) {
  console.log("request");
  next();
});

// RUTAS PARA ALUMNOS
router.route('/alumnos')

.post(async function(req, res) {
  try {
    var alumno = new Alumno({
      nombre: req.body.nombre,
      edad: req.body.edad,
      carrera: req.body.carrera
    });

    await alumno.save();
    res.json({ message: "Alumno registrado con éxito" });

  } catch (error) {
    res.status(500).send("Error en el servicio: " + error);
  }
})

.get(async function(req, res) {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).send("Error en el servicio: " + error);
  }
});


// RUTA PUT Y DELETE PARA ACTUALIZAR Y ELIMINAR
router.route('/alumnos/:id')

.put(async function(req, res) {
  try {
    await Alumno.findByIdAndUpdate(req.params.id, {
      nombre: req.body.nombre,
      edad: req.body.edad,
      carrera: req.body.carrera
    });

    res.json({ message: "Alumno actualizado con éxito" });

  } catch (error) {
    res.status(500).send("Error en la actualización: " + error);
  }
})

.delete(async function(req, res) {
  try {
    await Alumno.findByIdAndDelete(req.params.id);
    res.json({ message: "Alumno eliminado con éxito" });

  } catch (error) {
    res.status(500).send("Error al eliminar: " + error);
  }
});

module.exports = router;
