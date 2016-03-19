'use strict';

angular.module('webPortalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/orders',
        template: '<orders></orders>'
      });
  });
