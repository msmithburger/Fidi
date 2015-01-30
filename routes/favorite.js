var mongoose = require('mongoose');
var Favorite = require('../models/Favorite.js');

/* GET /favorite listing. */
exports.favorite = function(req, res, next) {
  Favorite.find(function (err, favorite) {
    if (err) return next(err);
    res.json(favorite);
  });
}

/* POST /favorite */
exports.addFavorite = function(req, res, next) {
  Favorite.create(req.body, function (err, favorite) {
    if (err) return next(err);
    res.json(favorite);
  });
}

/* GET /favorite/id */
exports.favorite = function(req, res, next) {
  Favorite.findById(req.params.id, function (err, favorite) {
    if (err) return next(err);
    res.json(favorite);
  });
}

/* PUT /favorite/:id */
exports.editFavorite = function(req, res, next) {
  Favorite.findByIdAndUpdate(req.params.id, req.body, function (err, favorite) {
    if (err) return next(err);
    res.json(favorite);
  });
}

/* DELETE /favorite/:id */
exports.deleteFavorite = function(req, res, next) {
  Favorite.findByIdAndRemove(req.params.id, req.body, function (err, favorite) {
    if (err) return next(err);
    res.json(favorite);
  });
}