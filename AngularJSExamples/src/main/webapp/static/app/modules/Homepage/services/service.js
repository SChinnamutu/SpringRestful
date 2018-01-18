'use strict';

define([ 'app' ], function(app) {
	app.service('userService', [ '$http', function($http) {
		return {
			newUser : function(userData) {
				var url = '/AngularJSExamples/addNew';
				var data = {
					name : userData.name,
					email : userData.email,
					website : userData.website
				};

				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			},
			
			editUser : function(userData) {
				var url = '/AngularJSExamples/editUser';
				var data = {
					id : userData.id,
					name : userData.name,
					email : userData.email,
					website : userData.website
				};

				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			},

			getUsers : function(userData) {
				var url = '/AngularJSExamples/getUsers';
				var data = {
					userId : userData
				};

				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			},
			
			deleteUser : function(userData) {
				var url = '/AngularJSExamples/deleteUser';
				var data = {
					userId : userData
				};

				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			}
		};
	} ]);
});