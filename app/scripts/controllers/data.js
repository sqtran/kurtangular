'use strict';

angular.module('kurtangularApp')
  .controller('DataCtrl', function ($scope) {
	  
	  function initdata() {
		  $scope.data = ['Steve Harvey', 'Steve Jobs', 'Steve Wozniak', 'Steve Carell', 'Steve Martin', 'Steve Austin'];
	  }
	  
	  if(!localStorage.data) {
	 	  console.log("creating a list of GOATs now");
	 	  initdata();
		  localStorage.data = JSON.stringify($scope.data);
	  }
	  else {
		  $scope.data = JSON.parse(localStorage.data);
	  }
	  
	  function sortme() {
		  $scope.data = $scope.data.reverse();
	  }

	  // add_name references the model directly, but I could have passed in an argument as well
	  function addme() {
		  console.log("Someone sent : " + $scope.add_name);
		  
		  if($scope.data.indexOf($scope.add_name) !== -1) {
			  console.log("Found a duplicate!");
			  $scope.success_message = false;
			  $scope.warn_message = true;
		  }
		  else if ( (/^Steve/).test($scope.add_name)) {
			  $scope.data.push($scope.add_name);
			  $scope.success_message = true;
			  $scope.warn_message = false;
			  $scope.add_name = null;	// clear out input box after adding
		  }
		  else {
			  console.log("Name does not start with Steve");
			  $scope.steve_name_error = "Name does not start with Steve";
			  $scope.warn_message = true;
			  $scope.success_message = false;
		  }

		  // save to HTML 5 local storage
		  localStorage.data = JSON.stringify($scope.data);
	  }
	  
	  function clearstorage() {
		  console.log("clearing local storage data");
		  localStorage.clear();
		  initdata();
	  }
	  

	  
	  $scope.clearstorage = clearstorage;
	  $scope.sortme = sortme;
	  $scope.addme = addme;
  });