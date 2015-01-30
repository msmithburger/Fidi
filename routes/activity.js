var mongoose = require('mongoose');
var Activity = require('../models/Activity.js');

/* GET /activity listing. */
exports.activity = function(req, res, next) {
  Activity.find(function (err, activity) {
    if (err) return next(err);
    res.json(activity);
  });
}

/* POST /activity */
exports.addActivity = function(req, res, next) {
  Activity.create(req.body, function (err, activity) {
    if (err) return next(err);
    res.json(activity);
  });
}

/* GET /activity/id */
exports.activity = function(req, res, next) {
  Activity.findById(req.params.id, function (err, activity) {
    if (err) return next(err);
    res.json(activity);
  });
}

/* PUT /activity/:id */
exports.editActivity = function(req, res, next) {
  Activity.findByIdAndUpdate(req.params.id, req.body, function (err, activity) {
    if (err) return next(err);
    res.json(activity);
  });
}

/* DELETE /activity/:id */
exports.deleteActivity = function(req, res, next) {
  Activity.findByIdAndRemove(req.params.id, req.body, function (err, activity) {
    if (err) return next(err);
    res.json(activity);
  });
}