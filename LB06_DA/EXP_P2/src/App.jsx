import imagen from './william.jpg';
import './App.css';

function App() {
  const nombre = 'Estudiante';
  return (
    <div className="contenedor">
      <h1>Bienvenido, {nombre}</h1>
      <img src={imagen} alt="Ejemplo" />
      <br />
      <p>Parrafo después de salto de linea.</p>
    </div>
  );
}

export default App;
