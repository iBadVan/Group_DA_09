import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header style={{ padding: "1rem", background: "#f0f0f0", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Inicio</Link>
          <Link to="/articulos">Artículos</Link>
        </nav>
      </header>

      <main style={{ padding: "1rem", minHeight: "70vh" }}>
        <Outlet />
      </main>

      <footer style={{ padding: "1rem", background: "#f0f0f0", borderTop: "1px solid #ddd", textAlign: "center" }}>
        <small>© 2025 Blog de Práctica</small>
      </footer>
    </>
  );
};

export default Layout;
