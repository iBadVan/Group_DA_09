<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Registro de Usuario</title>
<style>body{font-family:system-ui;margin:24px}</style></head>
<body>
<h2>Formulario de inscripción de usuarios</h2>
<form method="post" action="insertar.php">
  <label>Nombre completo</label><br>
  <input name="nombre" required><br><br>

  <label>Dirección</label><br>
  <textarea name="direccion" rows="3"></textarea><br><br>

  <label>Correo electrónico</label><br>
  <input type="email" name="email" required><br><br>

  <label>Contraseña</label><br>
  <input type="password" name="contrasena" required><br><br>

  <label>Fecha de nacimiento</label><br>
  <input type="date" name="fecha_nac"><br><br>

  <label>Sexo:</label>
  <input type="radio" name="sexo" value="Hombre" checked> Hombre
  <input type="radio" name="sexo" value="Mujer"> Mujer<br><br>

  <label>Temas de interés:</label><br>
  <input type="checkbox" name="interes[]" value="Ficción"> Ficción
  <input type="checkbox" name="interes[]" value="Acción"> Acción
  <input type="checkbox" name="interes[]" value="Comedia"> Comedia
  <input type="checkbox" name="interes[]" value="Terror"> Terror
  <input type="checkbox" name="interes[]" value="Suspense"> Suspense<br><br>

  <label>Aficiones:</label><br>
  <select name="aficiones[]" multiple size="4">
    <option>Música</option>
    <option>Fotografía</option>
    <option>Deporte</option>
    <option>Lectura</option>
    <option>Cine</option>
  </select><br><br>

  <button type="submit">Registrar usuario</button>
</form>
<p><a href="index.php">Volver al inicio</a></p>
</body></html>
