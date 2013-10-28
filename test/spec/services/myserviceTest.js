'use strict';

/* jasmine specs for services go here */

describe('service', function() {
	// load the controller's module
	beforeEach(module('zendocApp'));
	
	var myService;
	
	beforeEach(inject(function ($injector, $controller, $rootScope, $location, $httpBackend) {
        this.$location = $location;
        this.$httpBackend = $httpBackend;
        this.scope = $rootScope.$new();
        myService = $injector.get('myService');
	}));
	
	it('showLoginMessage test', function($injector) {

	      expect(myService.showLoginMessage('david')).toEqual(true);
	      expect(myService.showLoginMessage('world')).toEqual(false);
	      expect(myService.showLoginMessage()).toEqual(false);
	    });
});
