import React from 'react';
import TeamTable from './TeamTable';

function App() {
  const teams = [
    { id: 1, name: 'Universitario de Deportes', city: 'Lima', coach: 'Fossati' },
    { id: 2, name: 'Alianza Lima',              city: 'Lima', coach: 'Gorosito' },
    { id: 3, name: 'Sporting Cristal',          city: 'Lima', coach: 'Enderson' },
    { id: 4, name: 'FBC Melgar',                city: 'Arequipa', coach: 'Lorca' },
  ];

  return (
    <div style={{ maxWidth: 760, margin: '40px auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      <h1>Actividad 3 — Ejercicio 1 (Liga 1)</h1>
      <p>Flujo unidireccional por <code>props</code>: <code>App → TeamTable → TableBody</code></p>

      <TeamTable teams={teams} title="Liga 1 — Clubes y DTs" />
    </div>
  );
}

export default App;
