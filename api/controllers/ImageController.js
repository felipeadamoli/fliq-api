var mongoose = require('mongoose'),
  Image = mongoose.model('Image');

exports.list_all_images = (req, res) => {
  Image.find({}, (err, image) => {
    if (err)
      res.send(err);
    res.json(image);
  });
};

exports.create_images = (req, res) => {
  var new_image = new Image(req.body);
  new_image.save((err, image) => {
    if (err)
      res.send(err);
    res.json(image);
  });
};

exports.read_a_image = (req, res) => {
  Image.findById(req.params.imageId, (err, image) => {
    if (err)
      res.send(err);
    res.json(image);
  });
};

exports.update_a_image = (req, res) => {
  Image.findOneAndUpdate({_id: req.params.imageId}, req.body, {new: true}, (err, image) => {
    if (err)
      res.send(err);
    res.json(image);
  });
};


exports.delete_a_image = (req, res) => {
  Image.remove({
    _id: req.params.imageId
  }, (err, image) => {
    if (err)
      res.send(err);
    res.json({ message: 'Image successfully deleted' });
  });
};