// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const SPECIALTIES = ['Estadistica', 'DesarrolloWeb', 'Testing'];

function App() {
  const [selectedSpec, setSelectedSpec] = useState('Estadistica');
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [fileContent, setFileContent] = useState('');

  // cada vez que cambia la especialidad, traemos los archivos
  useEffect(() => {
    fetch(`http://localhost:3001/api/files/${selectedSpec}`)
      .then((res) => res.json())
      .then((data) => {
        setFiles(data);
        setFileContent('');
      })
      .catch((err) => console.error(err));
  }, [selectedSpec]);

  const handleUpload = (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Seleccione un archivo');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch(`http://localhost:3001/api/upload/${selectedSpec}`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        // recargar lista
        return fetch(`http://localhost:3001/api/files/${selectedSpec}`);
      })
      .then((res) => res.json())
      .then((data) => {
        setFiles(data);
        setSelectedFile(null);
      })
      .catch((err) => console.error(err));
  };

  const handleViewFile = (filename) => {
    fetch(`http://localhost:3001/api/files/${selectedSpec}/${filename}`)
      .then((res) => res.json())
      .then((data) => {
        setFileContent(data.content);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <h1>Gestor de archivos por especialidad</h1>

      <form onSubmit={handleUpload} className="upload-form">
        <label>
          Especialidad:{' '}
          <select
            value={selectedSpec}
            onChange={(e) => setSelectedSpec(e.target.value)}
          >
            {SPECIALTIES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <button type="submit">Subir</button>
      </form>

      <h2>Archivos en {selectedSpec}</h2>
      <ul className="file-list">
        {files.map((f) => (
          <li key={f}>
            {f}{' '}
            <button onClick={() => handleViewFile(f)}>
              Ver
            </button>
          </li>
        ))}
        {files.length === 0 && <li>No hay archivos aún</li>}
      </ul>

      {fileContent && (
        <div className="file-viewer">
          <h3>Contenido del archivo</h3>
          <pre>{fileContent}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
