'use strict';
(function () {

  class EditMenuComponent {
    constructor() {
      this.menus = [
        {
          index: 0,
          heading: "Dinner Menu",
          content: "This is my Dinner Menu!"
        },
        {
          index: 1,
          heading: "Lunch Menu",
          content: "This is my Lunch Menu!"
        }
      ]
    }
  }

  angular.module('webPortalApp')
    .component('editMenu', {
      templateUrl: 'app/edit_menu/edit_menu.html',
      controller: EditMenuComponent,
      controllerAs: 'vm'
    });

})();
