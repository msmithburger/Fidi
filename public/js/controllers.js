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
  $scope.$on('$viewContentLoaded', function(event){
    $('.join-link').on('click', function() {
      $(this).hide();
      $(this).siblings('.join-going').show();
      return false;
    });
  });

}])

fidi.controller('SearchController',  ['$scope', function ($scope) {
    $scope.$on('$viewContentLoaded', function(event){
      if ($('[data-toggle="select"]').length) {
        $('[data-toggle="select"]').select2();
      }
    });
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
    })
    .when('/search', {
      templateUrl: 'partials/search',
      controller: 'SearchController'
    });
    $locationProvider.html5Mode(true);
}]);