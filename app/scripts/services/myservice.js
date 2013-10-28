'use strict';

angular.module('zendocApp').factory(
		'myService',
		function() {
			return {
				/**
				 * Calculate the login message
				 */
				showLoginMessage : function(name) {

					return name && name !== 'world';
				}
			};
		});