const mongoose = require('mongoose');
let db = mongoose.connection;

mongoose.connect('mongodb://localhost/mediaDb', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

let gameSchema = new mongoose.Schema({
  video: Array,
	images: Array,
	splash: String,
	description: String,
	reviews: String,
	releaseDate: String,
	developer: String,
	publisher: String,
	tags: Array,
});

let Game = mongoose.model('Game', gameSchema);

module.exports.addNewGame = (game, cb) => {
	let newGame = new Game(game);
	newGame.save((err, newGame) => {
		if(err) {
			cb(err);
		} else {
			cb(null, newGame);
		}
	})
};

module.exports.getGame = (id, cb) => {
	console.log('made it to database!')
	Game.find({_id: `${id}`}, (err, data) => {
		if (err) {
			cb(err);
		} else {
			cb(null, data);
		}
	})
};

