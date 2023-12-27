const express = require('express');
const app = express();

const PORT = 8020;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is up on http://0.0.0.0:${PORT}`);
});
