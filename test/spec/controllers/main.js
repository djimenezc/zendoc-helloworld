'use strict';

describe('Controller: MainCtrl', function() {

	// load the controller's module
	beforeEach(module('zendocApp'));

	var MainCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope, $routeParams) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope : scope
		});
	}));

	it('default name value equals world', function() {
		expect(scope.name).toEqual("world");
	});
});

describe('Controller: MainCtrl using $routeParams', function() {

	// load the controller's module
	beforeEach(module('zendocApp'));

	var MainCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		var routeParams = {username : 'david'};
		MainCtrl = $controller('MainCtrl', {
			$scope : scope,
			$routeParams : routeParams
		});
	}));
	
	it('scope name variable equals david', function() {
		expect(scope.name).toEqual("david");
	});
});
