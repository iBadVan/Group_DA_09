import { Link } from 'react-router-dom';

export default function Navegacion() {
  const estiloNav = { display: 'flex', gap: '1rem', padding: '1rem' };
  return (
    <nav style={estiloNav}>
      <Link to="/">Inicio</Link>
      <Link to="/api">API</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
  );
}
