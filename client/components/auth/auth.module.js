'use strict';

angular.module('webPortalApp.auth', [
  'webPortalApp.constants',
  'webPortalApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
