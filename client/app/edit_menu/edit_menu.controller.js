'use strict';
(function () {

  class EditMenuComponent {
    constructor($scope, Auth, $http) {

      this.$scope = $scope;
      this.$http = $http;

      // console.log(this.$scope)
      var user = Auth.getCurrentUser();
      this.currentUser = user;
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
      var that = this;
      var data = {
        title: title,
        restaurant_id: this.currentUser._id,
        active: true,
        menu_items: []
      }
      this.$http({
        method: 'POST',
        url: '/api/menus',
        data: data
      }).then(function successCallback(response) {
        that.menus.push(data)
      }, function errorCallback(response) {
      });
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
