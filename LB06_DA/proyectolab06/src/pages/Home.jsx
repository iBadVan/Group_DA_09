import Tabla from '../Table';
import Formulario from '../Form';
import FondoUCSM from '../components/FondoUCSM';

export default function PaginaInicio({ personajes, eliminarPersonaje, manejarEnvio }) {
  return (
    <FondoUCSM>
      <h1>Directorio de Desarrolladores (UCSM)</h1>
      <Formulario manejarEnvio={manejarEnvio} />
      <hr />
      <Tabla datosPersonajes={personajes} eliminarPersonaje={eliminarPersonaje} />
    </FondoUCSM>
  );
}
