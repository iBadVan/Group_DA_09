const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chedu123',
    database: 'biblioteca'
});

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Conectado exitosamente a la BD");
});

module.exports = con;
