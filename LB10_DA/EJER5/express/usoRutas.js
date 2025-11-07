// Importar Express y crear un enrutador
const express = require('express');
const router = express.Router();

// “Base de datos” en memoria
let usuarios = [
  { id: 1, nombre: 'Mauricitom' },
  { id: 2, nombre: 'Ivancitom' },
  { id: 3, nombre: 'Diogitom' }
];

// Ruta que muestra todos los usuarios
router.get('/', function (req, res) {
  let lista = usuarios.map(u => u.nombre).join(', ');
  res.send('Usuarios registrados: ' + lista);
});

// Ruta que muestra un usuario por id (texto simple)
router.get('/:id', function (req, res) {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (!usuario) {
    res.send('Usuario no encontrado');
  } else {
    res.send('Usuario encontrado: ' + usuario.nombre);
  }
});

// Exportar el router
module.exports = router;
