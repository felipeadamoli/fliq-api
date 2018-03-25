var mongoose = require('mongoose'),
  Category = mongoose.model('Category');

exports.list_all_categories = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err)
      res.send(err);
    res.json(categories);
  });
};

exports.create_category = (req, res) => {
  var new_category = new Category(req.body);
  new_category.save((err, category) => {
    if (err)
      res.send(err);
    res.json(category);
  });
};