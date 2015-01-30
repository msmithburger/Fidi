exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.login = function (req, res) {
  res.render('login');
};