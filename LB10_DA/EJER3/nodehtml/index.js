// importar paquetes http y fs
var http = require('http');
var fs = require('fs');
var path = require('path');

// función para servir archivos HTML
function servirArchivo(rutaArchivo, res) {
    fs.readFile(rutaArchivo, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write('<h1>404 - Página no encontrada</h1>');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write(data);
            res.end();
        }
    });
}

// crear servidor
http.createServer(function (req, res) {
    console.log("Petición recibida: " + req.url);

    // determinar qué archivo servir
    let archivo = './index.html'; // por defecto

    if (req.url === '/about') archivo = './about.html';
    else if (req.url === '/contact') archivo = './contact.html';

    servirArchivo(path.resolve(archivo), res);

}).listen(3000, function () {
    console.log('Servidor funcionando en http://localhost:3000');
});
