const express = require('express');
const multer = require('multer');
const admin = require('firebase-admin');
const path = require('path');

const serviceAccount = require("./actividadda-fcf75-firebase-adminsdk-fbsvc-579f2eb8b5.json");

// Inicializar Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'actividadda-fcf75.appspot.com'
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

const app = express();
const port = 3000;

app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage()
});

/**
 * RUTA 1: Crear usuario en Firestore
 * Colección: "users"
 * Body JSON: { "name": "...", "age": 21, "salary": 1234.56 }
 */
app.post('/api/users', async (req, res) => {
  try {
    const { name, age, salary } = req.body;

    if (!name || !age || !salary) {
      return res.status(400).json({ error: 'name, age y salary son obligatorios' });
    }

    const docRef = await db.collection('users').add({
      name,
      age,
      salary,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return res.status(201).json({
      message: 'Usuario creado correctamente',
      id: docRef.id
    });
  } catch (error) {
    console.error('Error creando usuario:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/**
 * RUTA 2: Listar usuarios desde Firestore
 */
app.get('/api/users', async (req, res) => {
  try {
    const snapshot = await db.collection('users').orderBy('createdAt', 'desc').get();
    const users = [];

    snapshot.forEach(doc => {
      users.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return res.json(users);
  } catch (error) {
    console.error('Error listando usuarios:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/**
 * RUTA 3: Subir archivo a Firebase Storage
 * Endpoint: POST /api/files
 * Enviar: multipart/form-data con campo "file"
 * Opcional: campo "description"
 */
app.post('/api/files', upload.single('file'), async (req, res) => {
  try {
    // 1. Validar que llegó el archivo
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha enviado ningún archivo (campo "file")' });
    }

    const description = req.body.description || '';
    const originalName = req.file.originalname;
    const fileName = Date.now() + '_' + originalName.replace(/\s+/g, '_');

    // 2. Subir a Firebase Storage usando "save" (más simple que streams)
    const file = bucket.file(fileName);

    await file.save(req.file.buffer, {
      metadata: {
        contentType: req.file.mimetype
      }
    });

    // 3. Hacer público el archivo (opcional, pero útil para el ejercicio)
    await file.makePublic();

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;

    // 4. Guardar metadata en Firestore
    const docRef = await db.collection('files').add({
      fileName,
      originalName,
      description,
      url: publicUrl,
      contentType: req.file.mimetype,
      size: req.file.size,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return res.status(201).json({
      message: 'Archivo subido correctamente',
      id: docRef.id,
      url: publicUrl
    });
  } catch (error) {
    console.error('DETALLE del error al subir archivo:', error);
    return res.status(500).json({
      error: 'Error al subir el archivo',
      detail: String(error)   // si quieres puedes quitar "detail" luego
    });
  }
});


/**
 * RUTA 4: Listar archivos almacenados
 */
app.get('/api/files', async (req, res) => {
  try {
    const snapshot = await db.collection('files').orderBy('createdAt', 'desc').get();
    const files = [];

    snapshot.forEach(doc => {
      files.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return res.json(files);
  } catch (error) {
    console.error('Error listando archivos:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`API Firebase escuchando en http://localhost:${port}`);
});
