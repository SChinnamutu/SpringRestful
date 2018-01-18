'use strict';

define(['angular','jQuery','angular-resource','angular-ui-router'], function(angular) {
	   var app = angular.module('app', ['ngResource','ui.router']);
	   
	   app.run(['$http','$rootScope',
	      function($http, $rootScope) {

	       }      
	   ])
	   
	   .config(function ($provide, $urlRouterProvider, $locationProvider, $httpProvider) {
                $httpProvider.defaults.withCredentials = true;
                $locationProvider.html5Mode(false);
                $urlRouterProvider.otherwise('/');
       });	   
	   
	   return app;
});