import React, { Component } from 'react';

const Badge = ({ text }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: '999px',
      border: '1px solid #e5e5e5',
      fontSize: 12,
      marginLeft: 8,
    }}
  >
    {text}
  </span>
);

const TableHeader = () => (
  <thead>
    <tr>
      <th>Pos</th>
      <th>Jugador</th>
      <th>Club</th>
      <th>Goles</th>
      <th>Partidos</th>
      <th>Goles/Partido</th>
    </tr>
  </thead>
);

const TableBody = ({ scorers }) => (
  <tbody>
    {scorers.map((s) => (
      <tr key={s.id}>
        <td>{s.rank}</td>
        <td>
          {s.name}
          {/* insignia opcional */}
          {s.rank <= 3 ? <Badge text="Top 3" /> : null}
        </td>
        <td>{s.club}</td>
        <td>{s.goals}</td>
        <td>{s.matches}</td>
        <td>{(s.goals / s.matches).toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
);

class ScorersTable extends Component {
  render() {
    const { scorers, title = 'Liga 1 — Goleadores 2025' } = this.props;

    return (
      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: '8px 0' }}>{title}</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #e5e5e5' }}>
          <TableHeader />
          <TableBody scorers={scorers} />
        </table>
      </section>
    );
  }
}

export default ScorersTable;
