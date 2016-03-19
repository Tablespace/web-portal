'use strict';

(function () {

  class MainController {

    constructor(Auth) {
      this.isLoggedIn = Auth.isLoggedIn;
    }
  }

  angular.module('webPortalApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });

})();
