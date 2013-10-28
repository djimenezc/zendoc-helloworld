'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('zendocApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('default name value equals world', function () {
	  expect(scope.name).toEqual("world");
	  expect(scope.name).toEqual("world");
  });
});


