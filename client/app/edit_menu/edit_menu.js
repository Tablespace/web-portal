'use strict';

angular.module('webPortalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit_menu', {
        url: '/edit_menu',
        template: '<edit-menu></edit-menu>'
      });
  });

