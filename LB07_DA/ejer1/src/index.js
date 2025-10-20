import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import ArticleAuthor from "./pages/ArticleAuthor";
import { NotFoundPage } from "./pages/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="articulos" element={<ArticlesPage />} />
          {/* Ruta dinámica + anidada */}
          <Route path="articulos/:id" element={<ArticleDetailPage />}>
            <Route path="autor" element={<ArticleAuthor />} />
          </Route>
          {/* catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
