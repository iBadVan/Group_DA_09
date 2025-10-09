/* 
---------------------------------------------------------------
DESCRIPCIÓN GENERAL:
Este ejercicio tiene como propósito practicar la sintaxis JSX en React mediante
la creación de listas dinámicas, el uso de expresiones de JavaScript dentro del
JSX y la incorporación de una interacción básica con estado (`useState`).

La práctica extiende el trabajo anterior añadiendo un diseño visual más elaborado
con un fondo personalizado (imagen del campus UCSM) y una capa translúcida que
mejora la legibilidad del contenido.
---------------------------------------------------------------
ENUNCIADO:
1. Crear un componente `App2.jsx` que muestre la lista de cursos del ciclo.
2. Cada curso debe ser un objeto con su nombre y cantidad de créditos.
3. Implementar dos estados (`useState`):
   - `verCursos`: controla si la lista se muestra u oculta.
   - `soloAltos`: filtra los cursos para mostrar solo los que tienen 2 créditos o más.
4. Renderizar la lista con el método `map()` y asignar una `key` a cada elemento.
5. Calcular los totales de cursos y créditos con expresiones JavaScript (`length` y `reduce`).
6. Usar `className="contenedor"` y una etiqueta autocerrada `<br />`.
7. Aplicar estilo de fondo con la imagen del campus UCSM y una capa oscura semitransparente
   para que el texto sea legible.
8. Mantener el código libre de advertencias y con sintaxis JSX correcta.
---------------------------------------------------------------
*/

import { useState } from 'react';
import './App.css';
import fondo from './fondo.jpg'; // misma imagen usada en App1.jsx

function App2() {
  const [verCursos, setVerCursos] = useState(true);
  const [soloAltos, setSoloAltos] = useState(false);

  const cursosBase = [
    { nombre: 'COMPUTACIÓN EN RED III - 01 (Práctico)', creditos: 1 },
    { nombre: 'COMPUTACIÓN EN RED III - A (Teórico)', creditos: 2 },
    { nombre: 'DESARROLLO DE APLICACIONES - 06 (Práctico)', creditos: 1 },
    { nombre: 'DESARROLLO DE APLICACIONES - B (Teórico)', creditos: 2 },
    { nombre: 'FILOSOFÍA Y ÉTICA - A', creditos: 2 },
    { nombre: 'GESTIÓN DE DATOS E INFORMACIÓN - 06 (Práctico)', creditos: 1 },
    { nombre: 'GESTIÓN DE DATOS E INFORMACIÓN - C (Teórico)', creditos: 2 },
    { nombre: 'INFRAESTRUCTURA DE TECNOLOGÍAS DE LA INFORMACIÓN - 01 (Práctico)', creditos: 1 },
    { nombre: 'INFRAESTRUCTURA DE TECNOLOGÍAS DE LA INFORMACIÓN - B (Teórico)', creditos: 2 },
    { nombre: 'SISTEMAS DE INFORMACIÓN ADMINISTRATIVOS II - 05 (Práctico)', creditos: 1 },
    { nombre: 'SISTEMAS DE INFORMACIÓN ADMINISTRATIVOS II - B (Teórico)', creditos: 2 },
  ];

  const cursos = soloAltos
    ? cursosBase.filter(c => c.creditos >= 2)
    : cursosBase;

  const totalCreditos = cursos.reduce((acc, c) => acc + c.creditos, 0);

  const estiloFondo = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  };

  const estiloCapa = {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    color: 'white',
    padding: '2rem',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '700px',
    textAlign: 'center',
  };

  return (
    <div style={estiloFondo}>
      <div style={estiloCapa} className="contenedor">
        <h1>Cursos del ciclo (UCSM)</h1>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => setVerCursos(v => !v)}>
            {verCursos ? 'Ocultar' : 'Mostrar'} cursos
          </button>

          <button onClick={() => setSoloAltos(s => !s)}>
            {soloAltos ? 'Ver todos' : 'Solo 2 créditos o más'}
          </button>
        </div>

        <br />

        {verCursos ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cursos.map((c, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>
                {c.nombre} — {c.creditos} crédito{c.creditos !== 1 ? 's' : ''}
              </li>
            ))}
          </ul>
        ) : (
          <p>La lista está oculta.</p>
        )}

        <hr style={{ borderColor: 'white', margin: '1rem 0' }} />

        <p><strong>Total de cursos mostrados:</strong> {cursos.length}</p>
        <p><strong>Total de créditos mostrados:</strong> {totalCreditos}</p>
      </div>
    </div>
  );
}

export default App2;
