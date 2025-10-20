// Datos mock del blog
export const articles = [
  {
    id: 1,
    title: "Introducción a React Router",
    content:
      "React Router permite manejar la navegación en SPAs de forma declarativa.",
    author: {
      name: "Ana Velazco",
      bio: "Ingeniera de software y docente. Especialista en front-end."
    }
  },
  {
    id: 2,
    title: "Context vs Props Drilling",
    content:
      "Context evita pasar props innecesarias a través de muchos niveles.",
    author: {
      name: "Ángel Montesinos",
      bio: "Magíster en sistemas. Amante de la arquitectura limpia."
    }
  },
  {
    id: 3,
    title: "Rutas Dinámicas y Anidadas",
    content:
      "Combina parámetros dinámicos con <Outlet> para layouts compartidos.",
    author: {
      name: "Equipo DA",
      bio: "Equipo docente de Desarrollo de Aplicaciones."
    }
  }
];
