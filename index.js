const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app by faris from HC!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server is up on http://${HOST}:${PORT}`);
});
