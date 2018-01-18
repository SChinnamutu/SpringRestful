define([
    'require',
    'angular',
    'app'
], function (require, angular, app) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
    console.log("dom is now ready..");
});