<?php
$conexion = new mysqli("localhost", "root", "", "practica09db");
if ($conexion->connect_error) {
  die("Error de conexión: " . $conexion->connect_error);
}
?>
