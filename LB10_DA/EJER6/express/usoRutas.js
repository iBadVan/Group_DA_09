const express = require('express');
const router = express.Router();

// "Base de datos" en memoria
let usuarios = [
  { id: 1, nombre: 'Mauricitom' },
  { id: 2, nombre: 'Ivancitom' },
  { id: 3, nombre: 'Diogitom' }
];

// Middleware específico para este router
router.use((req, res, next) => {
  console.log('Middleware del router de usuarios ejecutado');
  next();
});

// Mostrar todos los usuarios
router.get('/', (req, res) => {
  let lista = usuarios.map(u => u.nombre).join(', ');
  res.send('Usuarios registrados: ' + lista);
});

// Mostrar usuario por id
router.get('/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (!usuario) {
    res.send('Usuario no encontrado');
  } else {
    res.send('Usuario encontrado: ' + usuario.nombre);
  }
});

module.exports = router;
