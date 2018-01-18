'use strict';

define(['app'], function(app) {
	app.config(['$stateProvider', function($stateProvider) {
		
		$stateProvider
		     .state('home', {
		    	url : '/',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/home.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('addNew', {
		    	url : '/addNew',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/addnew.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('edit', {
		    	url : '/edit/:id',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/edit.html',
		    	controller : 'EditUserCtrl'
		     });
	}]);
	console.log("Homepage Config loaded..");
});