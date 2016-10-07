const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
	name: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	admin: Boolean
	}
));
