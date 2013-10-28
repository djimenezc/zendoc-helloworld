'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Hello world App', function() {

	beforeEach(function() {
		browser().navigateTo('/');
	});

	it('should show Hello David', function() {
		browser().navigateTo('/#/david');
		expect(element('.hero-unit h2').text()).toMatch('Hello david');
	});

	it('should show Hello World', function() {
		browser().navigateTo('/');
		expect(element('.hero-unit h2').text()).toBe('Hello world');
	});
	
	it('should display about page', function() {
		browser().navigateTo('/#/about');
		expect(element('.hero-unit p').count()).toBe(5);
	});

	it('should display contact page', function() {
		browser().navigateTo('/#/contact');
		expect(element('.hero-unit a').count()).toBe(4);
	});
});
