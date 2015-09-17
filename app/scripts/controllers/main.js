'use strict';

/**
 * @ngdoc function
 * @name kurtangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kurtangularApp
 */
angular.module('kurtangularApp')
  .controller('MainCtrl', function ($scope, $http) {
	  this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	  $scope.whoismyhero = "kurt angle is my hero";

	  function getdata(zipcode) {
		  if (zipcode) {
		    $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zipcode)
		    .success(function(response) {$scope.data = response.weather[0].description;});
	      }
	  }
	  
	  $scope.getdata = getdata;
  });