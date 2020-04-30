const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const port = 8000;
const db = require('../database/config.js')

app.use(express.static(path.join(__dirname, '../public')))

app.get('/media', (req, res) => {
  console.log('made it to endpoint!')
  const callback = (err, data) => {
    if(err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };
  db.getGame(req.body._id, callback)
})

app.listen(port, () => {console.log(`listening at http://localhost:${port}`)});