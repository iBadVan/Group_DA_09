// importar librería http
var http = require('http');

// crear servidor
var server = http.createServer();

// función que genera un saludo básico
function generarSaludo() {
  const saludos = [
    '¡Que viva José Ñeri!',
    '¡Saludos a toda la nación!',
    '¡Viva la programación con Node.js!',
    '¡Hoy es un gran día para aprender!'
  ];
  // devolver un saludo aleatorio
  return saludos[Math.floor(Math.random() * saludos.length)];
}

// función que agrega un mensaje adicional
function mensajeExtra() {
  const extras = [
    'Sigue creando cosas geniales.',
    'Recuerda hidratarte 💧.',
    'Tu servidor está funcionando de maravilla 😎.',
    'El conocimiento es poder 💡.'
  ];
  return extras[Math.floor(Math.random() * extras.length)];
}

// función que combina los mensajes
function construirMensajeCompleto() {
  return `${generarSaludo()} ${mensajeExtra()}`;
}

// función principal de respuesta
function mensaje(petic, resp) {
  resp.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // obtener la hora actual
  const fecha = new Date();
  const hora = fecha.toLocaleTimeString('es-ES');

  // construir el texto completo
  const respuestaTexto = `${construirMensajeCompleto()}\nHora actual del servidor: ${hora}`;

  resp.write(respuestaTexto);
  resp.end();
}

// asignando mensaje de respuesta al servidor
server.on('request', mensaje);

// levantando servidor en puerto 3000
server.listen(3000, function () {
  console.log('La Aplicación está funcionando en el puerto 3000');
});
