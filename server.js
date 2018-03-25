var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/Model'),
    bodyParser = require('body-parser');

const db = require('./config/db');
  
mongoose.Promise = global.Promise;
mongoose.connect(db.url); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/Routes'); 
routes(app);

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('fliq RESTful API server started on: ' + port);