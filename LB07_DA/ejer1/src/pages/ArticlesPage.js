import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export const ArticlesPage = () => {
  return (
    <div>
      <h2>Artículos</h2>
      <ul style={{ paddingLeft: 0, listStyle: "none" }}>
        {articles.map(a => (
          <li key={a.id} style={{ marginBottom: "0.5rem" }}>
            <Link to={`/articulos/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
