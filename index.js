const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app test jenkins tester21');
});

const PORT = 8020;
const HOST = '0.0.0.0'; 
app.listen(PORT, HOST, () => {
  console.log(`Server is up on http://${HOST}:${PORT}`);
});
