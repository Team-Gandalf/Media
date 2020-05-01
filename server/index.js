const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = 8000;
const db = require('../database/config.js')

app.use(express.static(path.join(__dirname, '../public')));
app.use(parser.json());

app.get('/media', (req, res) => {
  const game = req.body;
  const callback = (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };
  db.getGame(game, callback);
});

app.listen(port, () => { console.log(`listening at http://localhost:${port}`); });
