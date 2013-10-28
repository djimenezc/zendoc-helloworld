'use strict';

angular.module('zendocApp').controller(
		'MainCtrl',
		function($scope, $routeParams) {

			$scope.name = $routeParams.username ? $routeParams.username
					: 'world';
		});