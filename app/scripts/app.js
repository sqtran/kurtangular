'use strict';

/**
 * @ngdoc overview
 * @name kurtangularApp
 * @description
 * # kurtangularApp
 *
 * Main module of the application.
 */
angular
  .module('kurtangularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
     .when('/secret', {
        templateUrl: 'views/secret.html'
      })
      .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'DataCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });