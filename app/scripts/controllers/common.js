'use strict';

angular.module('zendocApp').controller(
		'CommonCtrl',
		function($scope, $routeParams,myService) {

			$scope.showLoginBlock=myService.showLoginMessage($routeParams.username);
		});