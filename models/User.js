var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 	name: String,
    age: Number,
    password: String,
    email: String,
    gender: String,
    address: String,
    favorites: [],
});

module.exports = mongoose.model('User', UserSchema);
