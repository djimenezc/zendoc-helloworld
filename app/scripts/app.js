'use strict';

angular.module('zendocApp', []).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	}).when('/about', {
		templateUrl : 'views/about.html',
		controller : 'AboutCtrl'
	}).when('/contact', {
		templateUrl : 'views/contact.html',
		controller : 'ContactCtrl'
	}).when('/:username', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});
