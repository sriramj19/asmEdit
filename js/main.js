'use strict';

angular.module('app')
  .controller('AppCtrl', function($scope, $state) {

    $scope.app = {
      name: 'Angular-Starter',
      version: '1.0.0',
      apiURL: 'http://localhost:1337/'
    }

});
