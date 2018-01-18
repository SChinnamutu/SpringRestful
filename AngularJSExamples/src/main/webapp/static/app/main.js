'use strict';

require.config({
    waitSeconds: 200,
	// paths to the library
	paths: {
		'jQuery' : '/AngularJSExamples/static/lib/jquery/jquery-3.1.1.min',
		'angular' : '/AngularJSExamples/static/lib/angular/angular',
		'angular-resource' : '/AngularJSExamples/static/lib/angular/angular-resource',
		'angular-ui-router' : '/AngularJSExamples/static/lib/angular/angular-ui-router',
		'domReady' : '/AngularJSExamples/static/lib/domready/domready',
		'bootstrap' : '/AngularJSExamples/static/lib/bootstrap/js/bootstrap'
	},
	
	// modules and dependencies
	shim: {
		'jQuery': {
            'exports': 'jQuery'
        },
        'angular': {
            'exports': 'angular',
            deps: ['jQuery']
        }, 
        'angular': {
            'exports': 'angular',
            deps: ['jQuery']
        },
		'angular-ui-router': {
			'exports': 'angular-ui-router',
			deps: ['angular']
		},
        'angular': {
            'exports': 'angular',
            deps: ['jQuery']
        },        
        'angular-resource': {
        	'exports': 'angular-resource',
        	deps: ['angular']
        },
        'domReady': {
        	'exports': 'domReady',
        	deps: ['angular']
        },
        'bootstrap': {
        	'exports': 'bootstrap',
        	deps: ['jQuery']
        }
	},
	
	// kick start application
	deps: [
	    './modules/Homepage/homepageMain',
		'./AngularJSExamples/static/app/bootstrap.js'
	],
	
	priority: [
	    "angular"
	]
});