var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET /users listing. */
exports.users = function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
}

/* POST /users */
exports.addUser = function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

/* GET /users/id */
exports.user = function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

/* PUT /users/:id */
exports.editUser = function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

/* DELETE /users/:id */
exports.deleteUser = function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

