var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:  String,
    email: String,
    password: String,
    collections: [String]
});

module.exports = mongoose.model('Users', UserSchema);
