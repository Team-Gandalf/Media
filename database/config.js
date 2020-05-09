const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/mediaDb', { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to db');
});

const gameSchema = new mongoose.Schema({
	summary: {
		title: String,
		splash: String,
		description: String,
		reviews: { general: String, total: Number },
		releaseDate: String,
		developer: String,
		publisher: String,
    tags: [String],
    percentage: Number,
	},
	media: {
		video: [{video: String, thumbnail: String}],
  	images: [String],
	},
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

module.exports.getGame = (game, cb) => {
  Game.find({ _id: game._id }, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};
