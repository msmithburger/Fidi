var fidi = angular.module('app', ['ngRoute', 'ngResource']);

fidi.factory('Users', ['$resource', function($resource){
  return $resource('/api/users/:id', null, {
    'update': { method:'PUT' }
  });
}])

fidi.factory('Activity', ['$resource', function($resource){
  return $resource('/api/activities/:id', null, {
    'update': { method:'PUT' }
  });
}])


fidi.controller('UserController', ['$scope', 'Users', function ($scope, Users) {

}])

fidi.controller('UserDetailCtrl', ['$scope', '$routeParams', 'Users', function ($scope, $routeParams, Users) {
  $scope.user = Users.get({id: $routeParams.id });
}])

fidi.controller('ActivityController', ['$scope', 'Activity', function ($scope, Activity) {
  // Get all activities
  $scope.activities = Activity.query();
}])

fidi.controller('CreateActivityController', ['$scope', '$location', 'Activity', function ($scope, $location, Activity) {
  // Our form data for creating a new post with ng-model
  $scope.activityData = {};

  $scope.newActivity = function() {
    var activity = new Activity($scope.activityData);
    activity.$save();
    $location.path('activities');
  }
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
    })
    .when('/activities', {
      templateUrl: 'partials/activities',
      controller: 'ActivityController'
    })
    .when('/createActivity', {
      templateUrl: 'partials/createActivity',
      controller: 'CreateActivityController'
    });
    $locationProvider.html5Mode(true);
}]);