angular.module('zendocApp').factory(
		'myService',
		function() {
			return {
				showLoginMessage : function(name) {

					return name && name != 'world';
				},

				getLoginScope : function($scope, $routeParams) {
					$scope.name = $routeParams.username ? $routeParams.username
							: 'world';
					$scope.showLoginBlock = this
							.showLoginMessage($routeParams.username);
					console.log('showLoginBlock ' + $scope.showLoginBlock);

					return $scope;
				}
			};
		});