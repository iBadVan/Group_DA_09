const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       
  password: 'chedu123',        
  database: 'barbershop'
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL (barbershop)');
});

app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM books';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al consultar libros:', err);
      return res.status(500).json({ error: 'Error al obtener libros' });
    }
    res.json(results); 
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.get('/books/:id', function(req, res) {
    db.query(
        'select * from books where id = ?',
        [req.params.id],
        function(error, results) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        }
    );
});
