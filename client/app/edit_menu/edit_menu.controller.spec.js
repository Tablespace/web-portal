'use strict';

describe('Component: EditMenuComponent', function () {

  // load the controller's module
  beforeEach(module('webPortalApp'));

  var EditMenuComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EditMenuComponent = $componentController('EditMenuComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
