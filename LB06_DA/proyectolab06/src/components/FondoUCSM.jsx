// src/components/FondoUCSM.jsx
import fondo from '../fondo.jpg';
import '../App.css';

export default function FondoUCSM({ children }) {
  return (
    <div
      className="fondo-ucsm"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="capa-oscura contenedor">
        {children}
      </div>
    </div>
  );
}
