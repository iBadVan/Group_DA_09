const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');  // Si deseas hacer solicitudes a Wikipedia desde el backend

const app = express();
const port = 5000;

// Habilitar CORS para que todos los orígenes puedan hacer solicitudes
app.use(cors());  // Permite solicitudes de todos los orígenes

// Ruta para obtener datos de Wikipedia (por ejemplo, sobre la Universidad Católica de Santa María)
app.get('/wikipedia', async (req, res) => {
  const apiUrl = 'https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=Universidad_Cat%C3%B3lica_de_Santa_Mar%C3%ADa';
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const page = data.query.pages;
    const extract = page[Object.keys(page)[0]].extract;

    // Responder con el extracto de Wikipedia
    res.json({ extract });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de Wikipedia' });
  }
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
