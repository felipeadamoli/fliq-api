var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:  String,
    email: String,
    password: String,
    collections: [{ url: String, id: Schema.Types.ObjectId }]
});

module.exports = mongoose.model('Users', UserSchema);
