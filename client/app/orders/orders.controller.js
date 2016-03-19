'use strict';
(function () {

  class OrdersComponent {
    constructor($http) {
      // console.log($http.get('/api/orders'))
      var that = this;
      $http({
        method: 'GET',
        url: '/api/orders'
      }).then(function successCallback(response) {
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
