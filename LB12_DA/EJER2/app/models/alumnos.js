// Importando paquetes y archivos necesarios para crear estructura de documentos para colección
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema = new Schema ({
    nombre: String,
    edad: Number,
    carrera: String
});

module.exports = mongoose.model('alumnos', AlumnoSchema);
