const express = require('express');
const app = express();
app.use(express.json());

let items = [
  { id: 1, name: 'Item 1'},
  { id: 2, name: 'Item 2'}
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const { name } = req.body;
  const id = items.length + 1;

  const newItem = { id, name };
  items.push(newItem);

  res.status(201).json({
    message: 'Item creado',
    data: newItem
  });
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ message: 'Item no encontrado' });

  items[index].name = name;

  res.json({
    message: 'Item actualizado',
    data: items[index]
  });
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index === -1) return res.status(404).json({ message: 'Item no encontrado' });

  const deleted = items[index];
  items.splice(index, 1);

  res.json({
    message: 'Item eliminado',
    data: deleted
  });
});

app.listen(3000, () => {
  console.log('API ejecutándose en http://localhost:3000');
});
