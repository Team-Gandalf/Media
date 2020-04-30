const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const port = 8000;

app.use(express.static(path.join(__dirname, '../public')))

app.get('/media', (req, res) => {
  console.log('get request works!')
  res.send('get request works!')
})

app.listen(port, () => {console.log(`listening at http://localhost:${port}`)});