'use strict';

var formApp = angular.module('app');
formApp.controller('ProfileController', function($scope, $window, $http){
  $scope.formData = {};

  $scope.createProfile = function() {
    //** Uses jquery to serialize the objects received **//
    //var data = $.param($scope.formData);
    // $http({
    //   method  : 'POST',
    //   url     : '/',
    //   data    : data, //forms user object
    //   headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    // }).then(function(res){
    //   console.log('double okay');
    // });
    //**                                               **//
      $http.post($scope.app.apiURL + 'createProfile', $scope.formData).then(function(success)  {

        console.log(success);
        $window.location.href = '/#/thanks';
      });
  }
});
