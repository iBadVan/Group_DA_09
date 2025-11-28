// Importando paquetes y archivos necesarios conectarse con MongoDB
var mongoose = require('mongoose');
// Estableciendo conexion con MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/node-crud');

module.exports = mongoose;