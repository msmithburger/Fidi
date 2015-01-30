var mongoose = require('mongoose');
 
module.exports = mongoose.model('favorites',{
        Name: String,
        Rating: Number,
        ThumnailUrl: String
});