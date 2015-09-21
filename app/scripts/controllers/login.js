'use strict';

angular.module('kurtangularApp')
  .controller('LoginCtrl', function ($scope, $location) {
	  function authenticateme() {
		  if($scope.username && $scope.password) {
			  if ($scope.username === "kurt" && $scope.password === "angular") {
				  $location.path('/secret');
		      }
			  console.log('Someone is trying to log in with ' + $scope.username + " : " + $scope.password);
		  }
	  }

	  $scope.authenticateme = authenticateme;
  });