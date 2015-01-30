var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbConfig = require('./config/database.js');
var mongoose = require('mongoose');
var app = express();
mongoose.connect(dbConfig.url);

// Configuring Passport
//var passport = require('passport');
//var expressSession = require('express-session');

//app.use(expressSession({secret: 'mySecretKey'}));
//app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, done) {
//   done(null, user._id);
// });
 
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var routes = require('./routes');
var users = require('./routes/users');

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API

app.get('/api/users', users.users);

app.get('/api/users/:id', users.user);
app.post('/api/users', users.addUser);
app.put('/api/users/:id', users.editUser);
app.delete('/api/users/:id', users.deleteUser);

app.get('*', routes.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
