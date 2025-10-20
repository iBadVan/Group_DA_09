import { useOutletContext } from "react-router-dom";

const ArticleAuthor = () => {
  const { author } = useOutletContext(); // viene del Outlet del detalle
  return (
    <section style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ddd" }}>
      <h4>Sobre el Autor</h4>
      <p><strong>{author.name}</strong></p>
      <p>{author.bio}</p>
    </section>
  );
};

export default ArticleAuthor;
