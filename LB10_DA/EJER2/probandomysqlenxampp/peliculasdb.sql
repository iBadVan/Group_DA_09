-- Crear base de datos
CREATE DATABASE IF NOT EXISTS peliculasdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usar la base
USE peliculasdb;

-- Crear tabla de películas
CREATE TABLE peliculas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    director VARCHAR(100),
    anio INT,
    genero VARCHAR(50)
);

-- Insertar algunos datos de ejemplo
INSERT INTO peliculas (titulo, director, anio, genero) VALUES
('El Padrino', 'Francis Ford Coppola', 1972, 'Drama'),
('Interestelar', 'Christopher Nolan', 2014, 'Ciencia Ficción'),
('Parasite', 'Bong Joon-ho', 2019, 'Suspenso'),
('Coco', 'Lee Unkrich', 2017, 'Animación'),
('Avatar: El Camino del Agua', 'James Cameron', 2022, 'Acción');
