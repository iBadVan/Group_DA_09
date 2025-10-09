import imagen from './william.jpg';
import './App.css';

function App() {
  const nombre = 'Estudiante Lazo';
  return (
    <div className="contenedor">
      <h1>Bienvenido tulitabro, {nombre}</h1>
      <img src={imagen} alt="fotitocato" style={{ width: '700px', height: '500px' }} />
      <br />
      <p>Parrafo después de salto de linea.</p>
    </div>
  );
}

export default App;
