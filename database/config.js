const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/mediaDb', { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to db');
});

const gameSchema = new mongoose.Schema({
  title: String,
  video: [String],
  images: [String],
  splash: String,
  description: String,
  reviews: { general: String, total: Number },
  releaseDate: String,
  developer: String,
  publisher: String,
  tags: [String],
});

const Game = mongoose.model('Game', gameSchema);

module.exports.addNewGame = (game, cb) => {
  const newGame = new Game(game);
  newGame.save((err, newGame) => {
    if (err) {
      cb(err);
    } else {
      cb(null, newGame);
    }
  });
};

module.exports.getGame = (id, cb) => {
  console.log('made it to database!');
  Game.find({ _id: `${id}` }, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};
