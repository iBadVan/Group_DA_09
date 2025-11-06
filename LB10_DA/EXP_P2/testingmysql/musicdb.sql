-- Crear base de datos
CREATE DATABASE IF NOT EXISTS musicdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE musicdb;

-- Crear tabla de álbumes
CREATE TABLE albums (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    artista VARCHAR(100),
    anio INT,
    genero VARCHAR(50)
);

-- Insertar algunos álbumes de ejemplo
INSERT INTO albums (titulo, artista, anio, genero) VALUES
('Thriller', 'Michael Jackson', 1982, 'Pop'),
('Back in Black', 'AC/DC', 1980, 'Rock'),
('The Dark Side of the Moon', 'Pink Floyd', 1973, 'Rock Progresivo'),
('Bad Bunny: YHLQMDLG', 'Bad Bunny', 2020, 'Reggaeton'),
('Random Access Memories', 'Daft Punk', 2013, 'Electrónica');
