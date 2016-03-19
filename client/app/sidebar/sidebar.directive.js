'use strict';

angular.module('webPortalApp')
  .directive('sidebar', function () {
    return {
      templateUrl: 'app/sidebar/sidebar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
