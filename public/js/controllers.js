var fidi = angular.module('app', ['ngRoute', 'ngResource']);

fidi.factory('Users', ['$resource', function($resource){
  return $resource('/api/users/:id', null, {
    'update': { method:'PUT' }
  });
}])

fidi.controller('UserController', ['$scope', 'Users', function ($scope, Users) {
  $scope.users = Users.query();
  $scope.save = function(){
  if(!$scope.newUser || $scope.newUser.length < 1) return;
  var user = new Users({ name: $scope.newUser, completed: false });

    user.$save(function(){
      $scope.users.push(user);
      $scope.newUser = ''; // clear textbox
    });
  }
}])

fidi.controller('UserDetailCtrl', ['$scope', '$routeParams', 'Users', function ($scope, $routeParams, Users) {
  $scope.user = Users.get({id: $routeParams.id });
}])

fidi.controller('LoginController', ['$scope', function ($scope) {
  
}])

fidi.controller('HomeController', ['$scope', function ($scope) {
  
}])

fidi.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login',
      controller: 'LoginController'
    })
    .when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeController'
    });
    $locationProvider.html5Mode(true);
}]);