import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './components/Nav';
import PaginaInicio from './pages/Home';
import PaginaAcercaDe from './pages/About';
import Api from './Api';

// src/App.js (solo muestro la parte relevante del componente)
class App extends Component {
    state = {
      personajes: [
        { nombre: 'Ángel Montesinos Murillo',            grado: 'Mag.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/angel.png' },
        { nombre: 'Guillermo Enrique Calderón Ruiz',     grado: 'Dr.',   trabajo: 'Desarrollador / Profesor', avatar: '/avatars/guillermo.png' },
        { nombre: 'Carlo José Luis Corrales Delgado',    grado: 'Mag.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/carlo.png' },
        { nombre: 'José David Esquicha Tejada',          grado: 'Mag.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/jose_david.png' },
        { nombre: 'José Alfredo Sulla Torres',           grado: 'Dr.',   trabajo: 'Desarrollador / Profesor', avatar: '/avatars/jose_alfredo.png' },
        { nombre: 'Karim Guevara Puente de la Vega',     grado: 'Dra.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/karim.png' },
        { nombre: 'Karina Rosas Paredes',                grado: 'Dra.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/karina.png' },
        { nombre: 'Manuel Mariano Zúñiga Carnero',       grado: 'Dr.',   trabajo: 'Desarrollador / Profesor', avatar: '/avatars/manuel.png' },
        { nombre: 'Oscar Ramírez Valdez',                grado: 'Mag.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/oscar.png' },
        { nombre: 'Eveling Gloria Castro Gutierrez',     grado: 'Mag.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/eveling.png' },
        { nombre: 'Jorge Luis Martínez Muñoz',           grado: 'Mag.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/jorge.png' },
        { nombre: 'Mary Victoria Ruelas Llerena',        grado: 'Mag.',  trabajo: 'Desarrollador / Profesor', avatar: '/avatars/mary.png' },
      ],
    };

    eliminarPersonaje = (indice) => {
      this.setState(({ personajes }) => ({
        personajes: personajes.filter((_, i) => i !== indice),
      }));
    };

    manejarEnvio = (nuevoPersonaje) => {
      const avatar = nuevoPersonaje.avatar && nuevoPersonaje.avatar.trim()
        ? nuevoPersonaje.avatar
        : '/avatars/default.jpg';

      const personajeFinal = {
        nombre: (nuevoPersonaje.nombre || '').trim(),
        trabajo: (nuevoPersonaje.trabajo || 'Desarrollador / Profesor').trim(),
        grado:   (nuevoPersonaje.grado || '').trim(),
        avatar,
      };

      if (!personajeFinal.nombre) return;

      this.setState(({ personajes }) => ({
        personajes: [...personajes, personajeFinal],
      }));
    };

  render() {
    const { personajes } = this.state;

    return (
      <>
        <Navegacion />
        <Routes>
          <Route
            path="/"
            element={
              <PaginaInicio
                personajes={personajes}
                eliminarPersonaje={this.eliminarPersonaje}
                manejarEnvio={this.manejarEnvio}
              />
            }
          />
          <Route path="/api" element={<Api />} />
          <Route path="/about" element={<PaginaAcercaDe />} />
        </Routes>
      </>
    );
  }
}

export default App;
