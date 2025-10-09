import React from 'react';
import Table from './Table';

function App() {
  const characters = [
    { name: 'Mauricio', job: 'Desarrollador' },
    { name: 'Valerinao', job: 'Diseñadora UX' },
    { name: 'Iván', job: 'Network Engineer' },
    { name: 'Edducito', job: 'Data Scientist' },
  ];

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      <h1>Práctica 03 - Componentes y Props</h1>
      <p>
        Flujo de datos unidireccional: <code>App → Table → TableBody</code> mediante <code>props</code>.
      </p>

      <Table characterData={characters} />
    </div>
  );
}

export default App;
