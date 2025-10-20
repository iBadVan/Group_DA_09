import { useParams, Link, Outlet } from "react-router-dom";
import { articles } from "../data/articles";

export const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = articles.find(a => String(a.id) === id);

  if (!article) {
    return <h3>Artículo no encontrado</h3>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p style={{ lineHeight: 1.6 }}>{article.content}</p>

      <hr />
      <p>
        ¿Quieres saber más del autor?{" "}
        {/* ruta relativa => /articulos/:id/autor */}
        <Link to="autor">Sobre el Autor</Link>
      </p>

      {/* Aquí se renderiza la ruta hija (autor) */}
      <Outlet context={{ author: article.author }} />
    </div>
  );
};
