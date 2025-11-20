const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = 'mi_clave_super_secreta';

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Token requerido' });
  }

  const [type, token] = authHeader.split(' ');

  if (type !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Formato de token inválido' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expirado' });
      }
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = decoded;
    next();
  });
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Usuario “falso” para el ejercicio
  if (username !== 'admin' || password !== '1234') {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const payload = {
    username: 'admin',
    role: 'admin'
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '60s' });

  res.json({
    message: 'Login correcto',
    token,
    expiresIn: '60s'
  });
});

app.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Acceso permitido a /profile',
    user: req.user
  });
});

app.get('/admin/data', verifyToken, (req, res) => {
  // Podrías validar rol aquí si quieres
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'No tienes permisos de administrador' });
  }

  res.json({
    message: 'Acceso permitido a /admin/data',
    data: {
      reporte: 'Estadísticas secretas de la API',
      generadoPor: req.user.username
    }
  });
});

app.listen(3000, () => {
  console.log('API JWT escuchando en http://localhost:3000');
});
