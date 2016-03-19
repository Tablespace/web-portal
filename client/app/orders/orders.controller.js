'use strict';
(function () {

  class OrdersComponent {
    constructor($scope, Auth, $http) {
      var user = Auth.getCurrentUser();
      var that = this;
      $http({
        method: 'GET',
        url: '/api/orders/restaurant/' + user._id
      }).then(function successCallback(response) {
        console.log(response)
        that.orders = response.data;
      }, function errorCallback(response) {
        // do something if bad things happen
      });
    }
  }

  angular.module('webPortalApp')
    .component('orders', {
      templateUrl: 'app/orders/orders.html',
      controller: OrdersComponent,
      controllerAs: "vm"
    });

})();
