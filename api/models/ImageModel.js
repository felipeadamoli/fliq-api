var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema(
    {
        url: String,
        id: Schema.Types.ObjectId,
        category: String,
        description: String
    }
);
  
module.exports = mongoose.model('Image', ImageSchema);