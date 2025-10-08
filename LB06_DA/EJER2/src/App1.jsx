/* 
---------------------------------------------------------------
DESCRIPCIÓN GENERAL:
Este ejercicio tiene como propósito practicar la sintaxis JSX en React mediante
la creación de un componente que muestre información personal y académica de un
estudiante de la UCSM. Se utilizan variables, expresiones JavaScript y atributos
dinámicos para renderizar contenido dentro de una estructura JSX.

Además, se aplica un diseño visual que incorpora una imagen de fondo (campus UCSM)
y una capa translúcida que mejora la legibilidad del texto.

---------------------------------------------------------------
ENUNCIADO:
1. Crear un componente `App1.jsx` que muestre una ficha informativa del estudiante.
2. Definir variables con los siguientes datos personales:
   - Nombre completo.
   - Escuela profesional.
   - Ciclo académico.
3. Definir un objeto `curso` con información detallada del curso seleccionado:
   - Nombre del curso.
   - Créditos.
   - Docente responsable.
   - Horario.
   - Aula.
   - Duración en semanas y horas por semana.
4. Calcular el total de horas del curso mediante una expresión JavaScript.
5. Renderizar toda la información usando etiquetas JSX (`<p>`, `<strong>`, `<br />`)
   y aplicar una clase o estilo adecuado.
6. Añadir un enlace (`<a>`) que dirija al portal institucional de la UCSM utilizando
   un atributo dinámico `href`.
7. Aplicar estilos de fondo y una capa semitransparente que asegure buena legibilidad.
8. Mantener el código libre de advertencias y con sintaxis JSX correcta.
---------------------------------------------------------------
*/

import './App.css';
import fondo from './fondo.jpg'; // imagen del campus UCSM ubicada en src/

function App1() {
  // Datos personales del estudiante
  const nombreCompleto = 'Mauricio Paolo Lazo Franco';
  const escuela = 'Ingeniería de Sistemas';
  const ciclo = 6;

  // Información del curso seleccionado
  const curso = {
    nombre: 'DESARROLLO DE APLICACIONES - 06',
    creditos: 4,
    docente: 'Ing. A. Velazco',
    horario: 'Jueves y Viernes 07:00 – 09:00',
    aula: 'L-303',
    semanas: 16,
    horasPorSemana: 2,
  };

  // Cálculos y variables derivadas
  const horasTotales = curso.semanas * curso.horasPorSemana;
  const esCursoFuerte = curso.creditos >= 4;

  // Estilos de fondo e interfaz
  const estiloFondo = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const estiloCapa = {
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // capa translúcida
    color: 'white',
    padding: '2rem',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '600px',
    textAlign: 'center',
  };

  // Render del componente
  return (
    <div style={estiloFondo}>
      <div style={estiloCapa} title={`Ciclo ${ciclo}`}>
        <h1>Ficha del estudiante (UCSM)</h1>
        <p><strong>{nombreCompleto}</strong></p>
        <p>Escuela profesional: <strong>{escuela}</strong></p>
        <p>Ciclo actual: {ciclo}</p>

        <hr style={{ borderColor: 'white', margin: '1rem 0' }} />

        <h2>Curso seleccionado</h2>
        <p><strong>{curso.nombre}</strong></p>
        <p>Créditos: {curso.creditos} {esCursoFuerte && <span>— Curso fuerte</span>}</p>
        <p>Docente: {curso.docente}</p>
        <p>Horario: {curso.horario}</p>
        <p>Aula: {curso.aula}</p>
        <p>Horas totales estimadas: {horasTotales} h</p>

        <br />

        <a 
          href="https://www.ucsm.edu.pe" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: '#4dd0e1', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Portal UCSM
        </a>
      </div>
    </div>
  );
}

export default App1;
