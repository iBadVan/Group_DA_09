// index.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001; // backend en 3001

app.use(cors());
app.use(express.json());

// 1. Especialidades que vamos a manejar
const SPECIALTIES = ['Estadistica', 'DesarrolloWeb', 'Testing'];

// 2. Crear carpetas si no existen: uploads/Estadistica, uploads/DesarrolloWeb...
SPECIALTIES.forEach((spec) => {
  const dir = path.join(__dirname, 'uploads', spec);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 3. Configurar multer para guardar según la especialidad de la ruta
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const specialty = req.params.specialty;              // viene en la URL
    const dir = path.join(__dirname, 'uploads', specialty);
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    // guardamos el archivo con el mismo nombre que lo suben
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// 4. SUBIR archivo a una especialidad
// ej: POST http://localhost:3001/api/upload/Estadistica
app.post('/api/upload/:specialty', upload.single('file'), (req, res) => {
  const specialty = req.params.specialty;

  // validar especialidad
  if (!SPECIALTIES.includes(specialty)) {
    return res.status(400).json({ message: 'Especialidad no válida' });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'No se envió archivo' });
  }

  return res.json({
    message: 'Archivo subido correctamente',
    specialty,
    filename: req.file.originalname,
  });
});

// 5. LISTAR archivos de una especialidad
// ej: GET http://localhost:3001/api/files/Estadistica
app.get('/api/files/:specialty', (req, res) => {
  const specialty = req.params.specialty;

  if (!SPECIALTIES.includes(specialty)) {
    return res.status(400).json({ message: 'Especialidad no válida' });
  }

  const dir = path.join(__dirname, 'uploads', specialty);
  const files = fs.readdirSync(dir);
  return res.json(files);
});

// 6. VER contenido de un archivo
// ej: GET http://localhost:3001/api/files/Estadistica/miapunte.txt
app.get('/api/files/:specialty/:filename', (req, res) => {
  const { specialty, filename } = req.params;

  if (!SPECIALTIES.includes(specialty)) {
    return res.status(400).json({ message: 'Especialidad no válida' });
  }

  const filePath = path.join(__dirname, 'uploads', specialty, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Archivo no encontrado' });
  }

  // Para la práctica lo devolvemos como texto
  const content = fs.readFileSync(filePath, 'utf8');
  return res.json({
    filename,
    content,
  });
});

// 7. Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor de archivos corriendo en http://localhost:${PORT}`);
});
