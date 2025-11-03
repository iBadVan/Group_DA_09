<?php
header('Content-Type: text/html; charset=UTF-8');
include("conexion.php");

$nombre = $_POST['nombre'];
$direccion = $_POST['direccion'];
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];
$fecha_nac = $_POST['fecha_nac'];
$sexo = $_POST['sexo'];
$interes = isset($_POST['interes']) ? implode(", ", $_POST['interes']) : "";
$aficiones = isset($_POST['aficiones']) ? implode(", ", $_POST['aficiones']) : "";

$sql = "INSERT INTO usuarios (nombre, direccion, email, contrasena, fecha_nac, sexo, intereses, aficiones)
        VALUES ('$nombre', '$direccion', '$email', '$contrasena', '$fecha_nac', '$sexo', '$interes', '$aficiones')";

if ($conexion->query($sql) === TRUE) {
    echo "<h2>Registro exitoso</h2>";
    echo "<table border='1' cellpadding='6'>
          <tr><th>Nombre completo</th><td>$nombre</td></tr>
          <tr><th>Dirección</th><td>$direccion</td></tr>
          <tr><th>Correo electrónico</th><td>$email</td></tr>
          <tr><th>Contraseña</th><td>$contrasena</td></tr>
          <tr><th>Fecha de nacimiento</th><td>$fecha_nac</td></tr>
          <tr><th>Sexo</th><td>$sexo</td></tr>
          <tr><th>Temas de interés</th><td>$interes</td></tr>
          <tr><th>Aficiones seleccionadas</th><td>$aficiones</td></tr>
          </table>";
    echo "<p><a href='register.php'>Registrar otro usuario</a></p>";
} else {
    echo "Error al registrar: " . $conexion->error;
}

$conexion->close();
?>
