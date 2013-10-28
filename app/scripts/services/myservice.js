'use strict';

angular.module('zendocApp').factory(
		'myService',
		function() {
			return {
				/**
				 * Decide if the login message must be showed
				 */
				showLoginMessage : function(name) {

					return Boolean(name && name !== 'world');
				}
			};
		});