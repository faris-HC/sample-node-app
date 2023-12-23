
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app from Fariz by HC!');
});

app.listen(8016, '127.0.0.1', () => {
  console.log(`Server is up on http://127.0.0.1:8016`);
});
