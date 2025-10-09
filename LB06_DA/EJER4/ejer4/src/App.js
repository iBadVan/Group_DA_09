import React from 'react';
import ScorersTable from './ScorersTable';

function App() {
  const scorers = [
    { id: 1, rank: 1, name: 'Facundo Callejo', club: 'Cusco FC', goals: 21, matches: 29 },
    { id: 2, rank: 2, name: 'Jhonny Vidales', club: 'FBC Melgar', goals: 18, matches: 27 },
    { id: 3, rank: 3, name: 'Pablo Erustes', club: 'Deportivo Garcilaso', goals: 14, matches: 26 },
    { id: 4, rank: 4, name: 'Alex Valera', club: 'Universitario', goals: 14, matches: 28 },
    { id: 5, rank: 5, name: 'Jarlín Quintero', club: 'UTC', goals: 13, matches: 29 },
  ];

  return (
    <div style={{ maxWidth: 820, margin: '40px auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      <h1>Actividad 3 — Ejercicio 2 (Liga 1 — Goleadores 2025)</h1>
      <p>Flujo unidireccional por <code>props</code>: <code>App → ScorersTable → TableBody</code>. Sin <code>state</code>.</p>
      <ScorersTable scorers={scorers} />
    </div>
  );
}

export default App;
