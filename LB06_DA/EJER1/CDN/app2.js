/* 
UCSM — JSX: listas e interacción mínima (versión CDN)
Incluye fondo del campus UCSM, capa translúcida y lógica con useState.
*/

const { useState } = React;

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

  const cursos = soloAltos ? cursosBase.filter(c => c.creditos >= 2) : cursosBase;
  const totalCreditos = cursos.reduce((acc, c) => acc + c.creditos, 0);

  const estiloFondo = {
    backgroundImage: 'url(fondo.jpg)',
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
      <div style={estiloCapa}>
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
