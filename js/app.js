'use strict';

angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ngStorage',
    'oc.lazyLoad'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '/list'),
    $urlRouterProvider.otherwise('/list'),

    $stateProvider.state('base', {
        'abstract': !0,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('list', {
        url: '/list',
        parent: 'base',
        templateUrl: 'views/list.html',
        resolve: { login: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'app',
            files: ['js/controllers/ListsController.js', 'js/services/lists.js']
          })
        }
      }
    })
    .state('search', {
        url: '/search',
        parent: 'base',
        templateUrl: 'views/search.html',
        resolve: { search: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'app',
            files: ['js/controllers/SearchController.js']
          })
        }
      }
    })
    .state('image', {
        url: '/image',
        parent: 'base',
        templateUrl: 'views/image.html',
        resolve: { image: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'app',
            files: ['js/controllers/ImagesController.js']
          })
        }
      }
    })
    .state('create', {
        url: '/create',
        parent: 'base',
        templateUrl: 'views/createForm.html',
        resolve: { create: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'app',
            files: ['js/controllers/Wish_FormController.js', 'js/counter.js']
          })
        }
      }
    })
    .state('thanks', {
        url: '/thanks',
        parent: 'base',
        templateUrl: 'views/thanks.html',
        resolve: { thanks: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'app'
          })
        }
      }
    })
    .state('createProfile', {
        url: '/createProfile',
        parent: 'base',
        templateUrl: 'views/createProfile.html',
        resolve: { createProfile: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'app',
            files: ['js/controllers/ProfileController.js']
          })
        }
      }
    })
}]);
