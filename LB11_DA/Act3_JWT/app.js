const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = '123456'; 

app.post('/login', (req, res) => {
    const user = {
        username: req.body.username,
        role: 'admin'
    };

    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });

    res.json({
        message: 'Token generado',
        token: token
    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) return res.status(403).json({ message: 'Token requerido' });

    const token = bearerHeader.split(' ')[1];

    jwt.verify(token, SECRET_KEY, (err, data) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        req.userData = data;
        next();
    });
}

app.get('/profile', verifyToken, (req, res) => {
    res.json({
        message: 'Acceso permitido',
        user: req.userData
    });
});

app.listen(3000, () => {
    console.log("Servidor JWT ejecutándose en el puerto 3000");
});
