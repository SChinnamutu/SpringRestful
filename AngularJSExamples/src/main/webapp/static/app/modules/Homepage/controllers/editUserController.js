'use strict';

define(['app'], function(app) {
	app.controller('EditUserCtrl', ['$scope', '$state', '$window', '$rootScope', '$stateParams', 'userService',function($scope, $state, $window, $rootScope, $stateParams, userService) {
		
		$scope.userData = null;
		
		$scope.$on('$viewContentLoaded', function(){
			$scope.getUserOnId();
		});
		
		$scope.getUserOnId = function() {
			userService.getUsers($stateParams.id)
			.success(function(response) {
				$scope.userData = response[0];
			});	
		};
		
		$scope.editUserDetails = function() {
			userService.editUser($scope.userData)
			.success(function(response) {
				if(response == "1") {
					$window.alert("User updated successfully.");
					$state.transitionTo('home');
				} else {
					$window.alert("Something goes wrong. Please try again.");
				}
			})
			.error(function(response) {
				$window.alert("Something goes wrong. Please try again.");
			});
		};
		
		$scope.closeAddNew = function() {
			$state.transitionTo('home');
		};
		
	}]);
	console.log("Edit User Controller loaded..");
});