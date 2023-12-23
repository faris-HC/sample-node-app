const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app test jenkins tester2');
});

app.listen(8015, '127.0.0.1', () => {
  console.log(`Server is up on http://127.0.0.1:8015`);
});
