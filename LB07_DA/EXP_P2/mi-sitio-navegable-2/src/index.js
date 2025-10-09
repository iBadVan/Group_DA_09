
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importamos todos nuestros componentes
import Layout from './pages/Layout';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
// ... (mantén las importaciones anteriores)
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
 <BrowserRouter>
 <Routes>
 {/* La ruta padre usa el Layout y anida las demás */}
 <Route path="/" element={<Layout />}>
 {/* La ruta 'index' es la página por defecto del padre */}
<Route index element={<HomePage />} />
 <Route path="cursos" element={<CoursesPage />} />
 <Route path="cursos/:courseId" element={<CourseDetailPage />} />

 {/* Nuevas Rutas */}
 <Route path="login" element={<LoginPage />} />
 <Route
 path="dashboard"
 element={
 <ProtectedRoute>
 <DashboardPage />
 </ProtectedRoute>
 }
 />

 <Route path="*" element={<NotFoundPage />} />
 </Route>
 </Routes>
</BrowserRouter>
 </React.StrictMode>
);
