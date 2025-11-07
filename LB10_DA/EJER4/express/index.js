// Importando el paquete Express
var express = require('express');

// Creando la aplicación en Express
var app = express();

// Manejador de la ruta principal
app.get('/', function(req, res) {
  res.send('Bienvenido al servidor Express básico');
});

// Manejador que muestra la hora actual
app.get('/hora', function(req, res) {
  var horaActual = new Date().toLocaleTimeString();
  res.send('La hora actual del servidor es: ' + horaActual);
});

// Servidor en escucha
app.listen(3000, function() {
  console.log('La aplicación está funcionando en el puerto 3000');
});
