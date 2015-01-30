angular.module('app', ['ngRoute', 'ngResource'])

.factory('Users', ['$resource', function($resource){
  return $resource('/api/users/:id', null, {
    'update': { method:'PUT' }
  });
}])

.controller('UserController', ['$scope', 'Users', function ($scope, Users) {
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

.controller('UserDetailCtrl', ['$scope', '$routeParams', 'Users', function ($scope, $routeParams, Users) {
  $scope.user = Users.get({id: $routeParams.id });
}])

.controller('LoginCtrl', ['$scope', function ($scope) {
  
}])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login',
      controller: 'UserController'
    })
    .when('/:id', {
      templateUrl: 'partials/userDetails',
      controller: 'UserDetailCtrl'
    })
}]);