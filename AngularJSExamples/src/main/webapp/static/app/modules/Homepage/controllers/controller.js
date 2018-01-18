'use strict';

define(['app'], function(app) {
	app.controller('HomepageCtrl', ['$scope', '$state', '$window', '$rootScope', '$stateParams', 'userService',function($scope, $state, $window, $rootScope, $stateParams, userService) {	
		
		$scope.userData = null;
		$scope.userList = null;
		
		$scope.addNewUser = function() {
			userService.newUser($scope.userData)
			.success(function(response) {
				if(response == "1") {
					$window.alert("User added successfully.");
					$state.transitionTo('home');
				} else {
					$window.alert("Something goes wrong. Please try again.");
				}
			})
			.error(function(response) {
				$window.alert("Something goes wrong. Please try again.");
			});
		};
		
		$scope.deleteUser = function(id) {
			userService.deleteUser(id)
			.success(function(response) {
				if(response == "1") {
					$window.alert("User added successfully.");
					getUsers();
				} else {
					$window.alert("Something goes wrong. Please try again.");
				}
			})
			.error(function(response) {
				$window.alert("Something goes wrong. Please try again.");
			});
		};
		
		getUsers();
		
		function getUsers() {
			userService.getUsers(0)
			.success(function(response) {
				$scope.userList = response;
			})
			.error(function(response) {
				$window.alert("Error in service.");
			});
		};
		
		$scope.openAddNew = function() {
			$state.transitionTo('addNew');
		};
		
		$scope.closeAddNew = function() {
			$state.transitionTo('home');
		};
		
		$scope.edit = function(id) {
			$state.go('edit', {'id' : id});
		};
		
	}]);
	console.log("HomepageCtrl Controller loaded..");
});