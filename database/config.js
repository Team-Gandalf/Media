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