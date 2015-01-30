var mongoose = require('mongoose');
var ActivitySchema = new mongoose.Schema({
        name: String,
        rating: Number,
        age: String
        thumnailUrl: String,
        address: String,
        cost: String,
        enviorment: String,
        type: String
});

module.exports = mongoose.model('Activity', ActivitieSchema);
module.exports = mongoose.model('Favorite', ActivitieSchema);
