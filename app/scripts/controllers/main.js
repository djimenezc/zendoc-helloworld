'use strict';

angular.module('zendocApp').controller(
		'MainCtrl',
		function($scope, $routeParams,myService) {

			$scope.name = $routeParams.username ? $routeParams.username
					: 'world';
			$scope.showLoginBlock=myService.showLoginMessage($routeParams.username);
			console.log('showLoginBlock '+$scope.showLoginBlock);
		});