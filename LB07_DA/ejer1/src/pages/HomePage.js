import { useNavigate } from "react-router-dom";
import { articles } from "../data/articles";

export const HomePage = () => {
  const navigate = useNavigate();

  const goRandomArticle = () => {
    const ids = articles.map(a => a.id);
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    navigate(`/articulos/${randomId}`); // navegación programática
  };

  return (
    <div>
      <h2>Bienvenido al Blog</h2>
      <p>Explora artículos, detalles y la biografía del autor sin recargar la página.</p>
      <button onClick={goRandomArticle}>Leer un Artículo Aleatorio</button>
    </div>
  );
};
