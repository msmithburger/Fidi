var mongoose = require('mongoose');
var ActivitySchema = new mongoose.Schema({
    name: String,
    cost: String,
    env: String,
    cat: String
});

module.exports = mongoose.model('Activity', ActivitySchema);