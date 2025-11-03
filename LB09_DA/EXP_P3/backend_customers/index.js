// index.js (Backend)
const express = require('express');
const mysql = require('mysql2/promise'); // versión con promesas
const cors = require('cors');

const app = express();
const PORT = 3001; // backend en 3001

// 1. Middlewares
app.use(cors());           // permite que React (3000) consuma la API
app.use(express.json());   // para leer JSON del body

// 2. Pool de conexiones a MySQL
// AJUSTA user, password y database según tu MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',            // si tu MySQL tiene clave, ponla aquí
  database: 'publications' // BD a usar
});

// 3. Endpoint: GET /api/customers
app.get('/api/customers', async (req, res) => {
  try {
    console.log('Petición recibida en /api/customers');

    // consulta a la tabla customers
    const [rows] = await pool.query('SELECT name, isbn FROM customers');

    res.json(rows); // devolvemos JSON al frontend
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// 4. Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
