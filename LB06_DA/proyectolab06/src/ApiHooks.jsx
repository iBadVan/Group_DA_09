import { useEffect, useState } from 'react';

export default function ApiHooks() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const url =
          'https://en.wikipedia.org/w/api.php?action=opensearch&search=React&limit=5&namespace=0&format=json&origin=*';
        const r = await fetch(url);
        const json = await r.json();
        const items = (json[1] || []).map((titulo, i) => ({
          titulo,
          enlace: json[3]?.[i] || '#',
        }));
        setDatos(items);
      } catch (e) {
        setError('Error al extraer datos');
      } finally {
        setCargando(false);
      }
    })();
  }, []); // solo una vez

  if (cargando) return <div className="contenedor"><p>Cargando...</p></div>;
  if (error) return <div className="contenedor"><p>{error}</p></div>;

  return (
    <div className="contenedor">
      <h1>Resultados de Wikipedia: “React”</h1>
      <ul>
        {datos.map((item, idx) => (
          <li key={idx}><a href={item.enlace} target="_blank" rel="noreferrer">{item.titulo}</a></li>
        ))}
      </ul>
    </div>
  );
}
