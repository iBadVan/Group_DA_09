import { useUser } from '../context/UserContext';

export const UserProfile = () => {
  const { state } = useUser();
  const { isAuthenticated, user } = state;

  if (!isAuthenticated) return null;

  return (
    <section style={{ padding: 16 }}>
      <h3>Perfil del usuario</h3>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Correo:</strong> {user.email}</p>
    </section>
  );
};
