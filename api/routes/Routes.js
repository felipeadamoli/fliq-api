module.exports = function(app) {
    var user = require('../controllers/UserController');
    var image = require('../controllers/ImageController');

    app.route('/users')
      .get(user.list_all_users)
      .post(user.create_a_user);
    
    app.route('/users/:userId')
      .get(user.read_a_user)
      .put(user.update_a_user)
      .delete(user.delete_a_user);

    app.route('/images')
      .get(image.list_all_images)
      .post(image.create_images);

    app.route('/images/:imageId')
      .get(image.read_a_image)
      .put(image.update_a_image)
      .delete(image.delete_a_image);
};