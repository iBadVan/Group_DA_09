import { useUser } from '../context/UserContext';
import { Login } from './Login';

export const Header = () => {
  const { state, logout } = useUser();
  const { isAuthenticated, user } = state;

  return (
    <header style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 12, borderBottom: '1px solid #ddd' }}>
      <strong>Mi App</strong>
      <div style={{ marginLeft: 'auto' }}>
        {!isAuthenticated ? (
          <Login />
        ) : (
          <>
            <span style={{ marginRight: 8 }}>
              Hola, <strong>{user.name}</strong>
            </span>
            <button onClick={logout} style={{ padding: '6px 10px' }}>
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
    </header>
  );
};
