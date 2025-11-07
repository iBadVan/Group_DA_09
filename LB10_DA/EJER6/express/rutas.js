// Importar Express
const express = require('express');
const app = express();

// Importar middleware y rutas
const usoRutas = require('./usoRutas');

// Middleware global
const middleware = function (req, res, next) {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next();
};
app.use(middleware);

// Ruta principal
app.get('/', function (req, res) {
  res.send('Bienvenido al servidor con middleware y rutas separadas');
});

// Usar rutas de usuarios bajo /usuarios
app.use('/usuarios', usoRutas);

// Levantar servidor
app.listen(3000, function () {
  console.log('Servidor en escucha en http://localhost:3000');
});
