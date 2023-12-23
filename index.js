
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app from Fariz by HC!');
});

const PORT = 8015;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server is up on http://${HOST}:${PORT}`);
});
