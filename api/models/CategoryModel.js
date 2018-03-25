var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    title:  String,
    url: String
});

module.exports = mongoose.model('Category', CategorySchema);