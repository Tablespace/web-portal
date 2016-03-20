'use strict';
(function () {

  class EditMenuComponent {
    constructor($scope, Auth, $http) {
      var user = Auth.getCurrentUser();
      var that = this;
      $http({
        method: 'GET',
        url: '/api/menus/restaurant/' + user._id
      }).then(function successCallback(response) {
        that.menus = response.data
      }, function errorCallback(response) {
        // do something if bad things happen
      });
    }

    addMenu(title){
      alert("Title id is: " + title);
    };

  }

  angular.module('webPortalApp')
    .component('editMenu', {
      templateUrl: 'app/edit_menu/edit_menu.html',
      controller: EditMenuComponent,
      controllerAs: 'vm'
    });
})();

function Ctrl($scope) {

  $scope.menu = {
    index: 0,
    title: ''
  };

  $scope.addMenu = function(title){
    alert("Title id is: "+ title);
  };
}
