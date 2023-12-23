const express = require('express');
const app = express();

const PORT = 8015;
const HOST = '0.0.0.0'; // or replace with your server's IP address

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app by faris from HC!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server is up on http://${HOST}:${PORT}`);
});
