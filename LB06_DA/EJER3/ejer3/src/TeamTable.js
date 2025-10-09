import React, { Component } from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>#</th>
      <th>Club</th>
      <th>Ciudad</th>
      <th>DT</th>
    </tr>
  </thead>
);

const TableBody = ({ teams }) => (
  <tbody>
    {teams.map((t) => (
      <tr key={t.id}>
        <td>{t.id}</td>
        <td>{t.name}</td>
        <td>{t.city}</td>
        <td>{t.coach}</td>
      </tr>
    ))}
  </tbody>
);

class TeamTable extends Component {
  render() {
    const { teams, title = 'Liga 1 — Tabla de Clubes' } = this.props;

    return (
      <section style={{ marginTop: 24 }}>
        <h2 style={{ margin: '8px 0' }}>{title}</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #e5e5e5' }}>
          <TableHeader />
          <TableBody teams={teams} />
        </table>
      </section>
    );
  }
}

export default TeamTable;
