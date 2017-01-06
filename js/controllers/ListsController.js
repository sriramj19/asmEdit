'use strict';

var app = angular.module('app');
/* Lists Controller */

app.controller('ListController', function($scope, $http, ListsService) {
  $scope.lists = ListsService.getLists();
});
