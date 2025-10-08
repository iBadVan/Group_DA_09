/* 
UCSM — Ficha del estudiante (versión CDN)
Usa fondo personalizado, capa translúcida y JSX interpretado por Babel.
*/

function App1() {
  const nombreCompleto = 'Mauricio Paolo Lazo Franco';
  const escuela = 'Ingeniería de Sistemas';
  const ciclo = 6;

  const curso = {
    nombre: 'DESARROLLO DE APLICACIONES - 06',
    creditos: 4,
    docente: 'Ing. A. Velazco',
    horario: 'Jueves y Viernes 07:00 – 09:00',
    aula: 'L-303',
    semanas: 16,
    horasPorSemana: 2,
  };

  const horasTotales = curso.semanas * curso.horasPorSemana;
  const esCursoFuerte = curso.creditos >= 4;

  const estiloFondo = {
    backgroundImage: 'url(fondo.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const estiloCapa = {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    color: 'white',
    padding: '2rem',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '600px',
    textAlign: 'center',
  };

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
