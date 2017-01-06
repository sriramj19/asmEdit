'use strict';

var app = angular.module('app');
/* Lists Controller */

app.controller('SearchController',[ '$scope', '$http', function($scope, $http) {
  $scope.test = {};
  $scope.searchData = {};
  $scope.reply = function()  {
    $http.post($scope.app.apiURL + 'search', $scope.searchData).then(function(response){

      $scope.test = response.data ;
    }, function(x) {
      console.log('the error is' + x);
    });

  }
}]);
