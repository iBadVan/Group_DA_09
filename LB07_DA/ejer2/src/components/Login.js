import { useUser } from '../context/UserContext';

export const Login = () => {
  const { login } = useUser();

  const handleClick = () => {
    // Datos de ejemplo para el ejercicio
    login({ name: 'Estudiante UCSM', email: 'estudiante@ucsm.edu.pe' });
  };

  return (
    <button onClick={handleClick} style={{ padding: '8px 12px' }}>
      Iniciar Sesión
    </button>
  );
};
