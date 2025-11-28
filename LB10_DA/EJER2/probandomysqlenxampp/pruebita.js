// Importar paquete de MySQL
var mysql = require('mysql2');

// Configurar parámetros de conexión
var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306', // Cambia si tu MySQL usa otro puerto
    database: 'peliculasdb',
    user: 'root',
    password: '',
});

// Realizar conexión
conexion.connect(function (err) {
    if (err) {
        console.log("Error de conexión: " + err.stack);
        return;
    }
    console.log("Conectado al ID " + conexion.threadId);
});

// Realizar consulta
conexion.query('SELECT * FROM peliculas', function (error, results) {
    if (error) throw error;

    console.log("\n🎬 LISTADO DE PELÍCULAS 🎬\n");
    results.forEach((peli) => {
        console.log(`ID: ${peli.id} | Título: ${peli.titulo} | Director: ${peli.director} | Año: ${peli.anio} | Género: ${peli.genero}`);
    });
});

// Cerrar conexión
conexion.end();
